from flask import Flask, request,jsonify
from flask_cors import CORS
from lathe.db_config import myConnection

app=Flask(__name__)
app.secret_key="ganesh123"
CORS(app)
@app.route("/api/problems",methods=["GET","POST"])
def problem():
  data = request.json
  conn = myConnection()
  if conn is None:
    return jsonify({"error": "Database connection failed"}),500

  cursor = conn.cursor()
  try:
    query = "INSERT INTO customer(name, email, phone, problem) VALUES (%s, %s, %s, %s)"
    cursor.execute(query, (data["name"], data["email"], data["phone"], data["problem"]))
    conn.commit()
    return jsonify({"status": "Successfully sent"})
  except Exception as e:
    return jsonify({"error": str(e)}), 500
  finally:
    conn.close()

if __name__ == "__main__":
  app.run(debug=True)