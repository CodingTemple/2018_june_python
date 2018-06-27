from app import app, db
from flask import render_template, redirect, url_for
from app.forms import RegistrationForm, LoginForm
from flask_login import current_user, login_user, login_required, logout_user
from app.models import User

@app.route('/')
@login_required
def index():
  return render_template('index.html')
  
@app.route('/login', methods=['GET', 'POST'])
def login():
  if current_user.is_authenticated:
    return redirect(url_for('index'))
  form=LoginForm()
  if form.validate_on_submit():
    user = User.query.filter_by(email=form.email.data).first()
    if user is None or not user.check_password(form.password.data):
      return redirect(url_for('login'))
    login_user(user, remember=form.remember_me.data)
    return redirect(url_for('index'))
  return render_template('login.html', form=form)

@app.route('/logout')
def logout():
  logout_user()
  return redirect(url_for('index'))

@app.route('/register', methods=['GET', 'POST'])
def register():
  if current_user.is_authenticated:
    return redirect(url_for('index'))
  form=RegistrationForm()
  if form.validate_on_submit():
    user = User(email=form.email.data)
    user.set_password(form.password.data)
    db.session.add(user)
    db.session.commit()
    return redirect(url_for('login'))
  return render_template('register.html', form=form)
