import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from db_config import myConnection  # Ensure correct import name

app = Flask(__name__, static_folder='build', static_url_path='')
app.secret_key = "ganesh123"
CORS(app)

# Serve React Frontend
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# API Route
@app.route("/api/problems", methods=["POST"])
def problem():
    data = request.json
    conn = myConnection()

    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor()
        query = "INSERT INTO customer(name, email, phone, problem) VALUES (%s, %s, %s, %s)"
        cursor.execute(query, (data["name"], data["email"], data["phone"], data["problem"]))
        conn.commit()
        return jsonify({"status": "Successfully sent"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run(debug=True)
