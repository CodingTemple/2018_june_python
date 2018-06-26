from app import db

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(100), index=True, unique=True)
  password_hash = db.Column(db.String(100))

  def __repr__(self):
    return f"User({self.email})"
