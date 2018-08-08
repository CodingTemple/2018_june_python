from app import app, db
from app.models import Product

@app.shell_context_processor
def make_shell_context():
  return {
    'app': app,
    'db': db,
    'Product': Product
  }