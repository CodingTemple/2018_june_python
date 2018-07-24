from werkzeug.security import generate_password_hash, check_password_hash
from app import db

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(100), index=True, unique=True)
  password_hash = db.Column(db.String(100))

  def set_password(self, password):
    self.password_hash = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def __repr__(self):
    return f"User({self.email})"
