from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(100), index=True, unique=True)
  password_hash = db.Column(db.String(100))
  admin = db.Column(db.Boolean, default=False)

  def set_password(self, password):
    self.password_hash = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password_hash, password)

  def __repr__(self):
    return f"User({self.email})"

@login.user_loader
def load_user(id):
  return User.query.get(int(id))

