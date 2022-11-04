from flask import Flask,render_template, flash, redirect, request, session
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

if __name__ == '__main__':
    app.run()





if __name__ == "__main__":
    app.run(debug=True)