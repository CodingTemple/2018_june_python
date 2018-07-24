from app import app, db
from flask import render_template, redirect, url_for, flash, request
from app.forms import RegistrationForm, LoginForm, AdminForm, ProfileForm
from flask_login import current_user, login_user, login_required, logout_user
from app.models import User
from werkzeug.urls import url_parse

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
      flash("The email or password did not match. Try again!")
      return redirect(url_for('login'))
    login_user(user, remember=form.remember_me.data)
    next_page = request.args.get('next')
    if not next_page or url_parse(next_page).netloc != '':
      next_page = url_for('index')
    return redirect(next_page)
  return render_template('login.html', form=form)

@app.route('/logout')
def logout():
  logout_user()
  flash("You are logged out!")
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
    flash("You are now registered")
    return redirect(url_for('login'))
  return render_template('register.html', form=form)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
  users_list = []
  def get_users():
    for u in User.query.all():
      if u.id != current_user.id:
        users_list.append(u)
    return users_list
  context = {
    'form': AdminForm(),
    'users': get_users(),
  }
  form = AdminForm()
  if form.validate_on_submit():
    user = User.query.filter_by(email=form.email.data).first()
    if user is None:
      new_user = User(email=form.email.data)
      new_user.set_password(form.email.data)
      db.session.add(new_user)
      db.session.commit()
    flash("Added new user")
    return redirect(url_for('admin'))
  return render_template('admin.html', **context)

@app.route('/delete_user/<int:id>')
def delete_user(id):
  user = User.query.get(id)
  db.session.delete(user)
  db.session.commit()
  return redirect(url_for('admin'))

@app.route('/profile', methods=['GET', 'POST'])
@login_required
def profile():
  form = ProfileForm()
  form.email.data = current_user.email
  context = {
    'form': form
  }
  if form.validate_on_submit():
    db_email = User.query.filter_by(email=form.email.data)
    if current_user.email == form.email.data:
      flash('You already own that email. No change needed')
    if db_email is not None and not db_email != current_user.email:
      flash("That email is already taken. Try again.")
      return redirect(url_for('profile'))
    current_user.email = form.email.data
    current_user.set_password(form.password.data)
    flash("Profile has been updated")
    db.session.commit()
    return redirect(url_for('profile'))
  return render_template('profile.html', **context)