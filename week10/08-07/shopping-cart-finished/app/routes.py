from app import app, db
import os
from flask import redirect, render_template, url_for, session, flash, request
from app.models import Product
from app.stripe_info import stripe_keys
import stripe

@app.route('/')
def index():
  context = {
    'title': 'Home',
    'Products': Product.query.all()
  }
  print(os.getenv('STRIPE_PUBLISHABLE_KEY'))
  print(os.getenv('STRIPE_SECRET_KEY'))
  return render_template('index.html', **context)

@app.route('/cart')
def cart():
  if "cart" not in session or not session["cart"]:
    flash("There's nothing in your cart. Please add items.")
    return redirect(url_for('index'))
  items = session["cart"]
  dict_of_items = {}
  totalPrice = 0
  for item in items:
    product = Product.query.get(item)
    totalPrice+=product.price
    if product.id in dict_of_items:
      dict_of_items[product.id]["qty"] += 1
    else:
      dict_of_items[product.id] = {
        "id": product.id,
        "image": product.image,
        "name": product.name,
        "qty": 1,
        "price": product.price
      }
  session["paymentTotal"] = totalPrice
  session["shopping_cart"] = dict_of_items
  context = {
    'title': 'Shopping Cart',
    'display_cart': dict_of_items,
    'total': totalPrice,
    'key': stripe_keys['publishable_key']
  }
  return render_template('cart.html', **context)

@app.route('/charge', methods=['POST'])
def charge():
  amount = session["paymentTotal"] * 100

  customer = stripe.Customer.create(
    email='email@example.com',
    source=request.form['stripeToken']
  )

  charge = stripe.Charge.create(
    customer=customer.id,
    amount=amount,
    currency='usd',
    description='This is a test charge with Flask'
  )
  session['chargeAmount'] = amount
  return redirect(url_for('thanks'))

@app.route('/thanks')
def thanks():
  context = {
    'amount': session['chargeAmount']
  }
  return render_template('thanks.html', **context)

@app.route('/add_to_cart/<int:id>')
def add_to_cart(id):
  if "cart" not in session:
    session["cart"] = []
  session["cart"].append(id)
  flash("Item added to cart")
  return redirect(url_for('index'))

@app.route('/remove_item/<int:id>')
def remove_item(id):
  session["cart"].remove(id)
  flash("Item removed from cart")
  return redirect(url_for('cart'))

@app.route('/clear_cart')
def clear_cart():
  session["cart"].clear()
  flash("All items removed from cart")
  return redirect(url_for('cart'))
