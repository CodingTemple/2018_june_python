from app import app
from flask import render_template, redirect, url_for

@app.route('/')
def index():
  products = [
    {
      "name": "Head-N-Shoulders",
      "price": 7.99,
      "available": True
    },
    {
      "name": "Knees-N-Toes",
      "price": 5.99,
      "available": True
    },
    {
      "name": "Elbows-N-Shoulder Blades",
      "price": 3.99,
      "available": True
    },
  ]

  context = {
    "name": "Derek Hawkins",
    "products": products
  }
  return render_template('index.html', **context)

@app.route('/portfolio')
def portfolio():
  return render_template("portfolio.html")

@app.route('/contact')
def contact():
  return render_template("contact.html")

