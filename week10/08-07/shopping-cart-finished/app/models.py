from app import db

class Product(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50))
  image = db.Column(db.String(255), default="http://placehold.it/800x800")
  price = db.Column(db.Float)
  inventory = db.Column(db.Integer)

  def __repr__(self):
    return f'Product({self.id}, {self.name})'