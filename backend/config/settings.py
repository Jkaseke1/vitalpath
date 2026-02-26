import os
from dotenv import load_dotenv

load_dotenv()

# Email configuration for Gmail SMTP
EMAIL_USER = os.getenv("EMAIL_USER", "kasekejoseph19@gmail.com")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "crro mtzh eubv npuk")

# Supabase configuration
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "")
