from app import app
import os
import stripe

stripe_keys = {
  'secret_key': app.config['STRIPE_SECRET_KEY'],
  'publishable_key': app.config['STRIPE_PUBLISHABLE_KEY']
}

stripe.api_key = stripe_keys['secret_key']