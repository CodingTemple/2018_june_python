from app import app
from flask import render_template, redirect, url_for, flash
from app.forms import RegistrationForm, LoginForm

@app.route('/')
def index():
  return render_template('index.html')
  
@app.route('/login', methods=['GET', 'POST'])
def login():
  form=LoginForm()
  if form.validate_on_submit():
    flash("You are logged in!")
    return redirect('/')
  return render_template('login.html', form=form)

@app.route('/register')
def register():
  return render_template('register.html', form=RegistrationForm())
