from typing import List
from models.waitlist import WaitlistEntry
import uuid
from datetime import datetime
from config.settings import EMAIL_USER, EMAIL_PASSWORD, SUPABASE_URL, SUPABASE_KEY
import smtplib
from email.message import EmailMessage
import secrets
import requests

def _headers():
    return {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }

def _table_url():
    return f"{SUPABASE_URL}/rest/v1/waitlist"

def read_waitlist() -> List[WaitlistEntry]:
    resp = requests.get(_table_url(), headers=_headers(), params={"select": "*"})
    resp.raise_for_status()
    entries = []
    for item in resp.json():
        try:
            entries.append(WaitlistEntry(**item))
        except:
            pass
    return entries

def write_waitlist(entries: List[WaitlistEntry]):
    for entry in entries:
        data = entry.dict()
        data["timestamp"] = str(data["timestamp"]) if data.get("timestamp") else None
        resp = requests.post(_table_url(), headers={**_headers(), "Prefer": "resolution=merge-duplicates"}, json=data)
        resp.raise_for_status()

def update_waitlist_entry(token: str, updates: dict):
    resp = requests.patch(
        _table_url(),
        headers=_headers(),
        params={"registrationToken": f"eq.{token}"},
        json=updates,
    )
    resp.raise_for_status()

def send_confirmation_email(entry: WaitlistEntry):
    html_content = f"""
    <html>
    <head>
        <style>
            body {{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f8fafc;
            }}
            .header {{
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 30px 20px;
                text-align: center;
                color: white;
            }}
            .logo {{
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 10px;
            }}
            .container {{
                max-width: 600px;
                margin: 20px auto;
                background-color: white;
                border-radius: 12px;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }}
            .content {{
                padding: 40px 30px;
            }}
            h2 {{
                color: #1f2937;
                margin-bottom: 20px;
                text-align: center;
                font-size: 28px;
            }}
            p {{
                color: #4b5563;
                line-height: 1.6;
                margin-bottom: 20px;
                font-size: 16px;
            }}
            .button {{
                background-color: #2563eb;
                color: white;
                padding: 16px 32px;
                text-decoration: none;
                border-radius: 8px;
                display: inline-block;
                font-weight: bold;
                text-align: center;
                margin: 30px 0;
                box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                transition: all 0.3s ease;
            }}
            .button:hover {{
                background-color: #1d4ed8;
                box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
                transform: translateY(-2px);
            }}
            .footer {{
                background-color: #f9fafb;
                padding: 20px 30px;
                border-top: 1px solid #e5e7eb;
                font-size: 14px;
                color: #6b7280;
                text-align: center;
            }}
            .highlight {{
                color: #2563eb;
                font-weight: bold;
            }}
        </style>
    </head>
    <body>
        <div class="header">
            <div class="logo">VitalPath</div>
            <p>Your Health Journey Starts Here</p>
        </div>
        <div class="container">
            <div class="content">
                <h2>Welcome to VitalPath!</h2>
                <p>Hi <span class="highlight">{entry.firstName}</span>,</p>
                <p>Thank you for joining the VitalPath waitlist as a <span class="highlight">{entry.role}</span>.</p>
                <p>To complete your registration and provide additional details specific to your role, please click the button below:</p>
                <p style="text-align: center;">
                    <a href="https://form.typeform.com/to/i71YU2CD" style="background-color:#2563eb;color:#ffffff;padding:16px 32px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:bold;font-size:16px;font-family:Arial,sans-serif;">Complete Your Registration</a>
                </p>
                <p>This will help us provide you with the best personalized experience when VitalPath launches.</p>
                <p>We'll notify you when VitalPath launches.</p>
            </div>
            <div class="footer">
                <p>Best regards,<br><strong>VitalPath Team</strong></p>
                <p>If you have any questions, feel free to reply to this email.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    msg = EmailMessage()
    msg.set_content(html_content, subtype="html")
    msg['Subject'] = 'Welcome to VitalPath - Complete Your Registration!'
    msg['From'] = EMAIL_USER
    msg['To'] = entry.email

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            server.send_message(msg)
        print(f"Email sent to {entry.email}")
    except Exception as e:
        print(f"Failed to send email: {e}")

def add_to_waitlist(entry: WaitlistEntry) -> WaitlistEntry:
    entry.id = str(uuid.uuid4())
    entry.timestamp = datetime.utcnow()
    entry.registrationToken = secrets.token_urlsafe(32)
    data = {k: v for k, v in entry.dict().items() if v is not None}
    data["timestamp"] = str(entry.timestamp)
    resp = requests.post(_table_url(), headers=_headers(), json=data)
    resp.raise_for_status()
    send_confirmation_email(entry)
    return entry
