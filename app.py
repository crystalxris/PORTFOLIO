
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# CONTACT FORM

@app.route("/contact", methods=["POST"])
def contact():

    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    print("\nNEW MESSAGE")
    print("Name:", name)
    print("Email:", email)
    print("Message:", message)

    return render_template(
        "index.html",
        success="Message Sent Successfully!"
    )

if __name__ == "__main__":
    app.run(debug=True)

