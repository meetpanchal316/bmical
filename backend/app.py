from flask import Flask, request, jsonify

# Declare the app
app = Flask(__name__)

# Route for BMI calculation result
@app.route("/api/bmi", methods=["POST"])
def calculate():
    try:
        w = float(request.form.get("weight"))
        h = float(request.form.get("height"))
        if w > 0 and h > 0:
            bmi = round(w / ((h / 100) ** 2), 3)
            return jsonify({"bmi": bmi}), 200
        else:
            error = "Weight and height must be positive numbers."
            return jsonify({"error": error}), 400
    except ValueError:
        error = "Please enter valid numeric values."
        return jsonify({"error": error}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)