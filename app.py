from flask import Flask,render_template, flash, redirect, request, session


app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route('/index')
def index():
    return '<h1>Hello</h1>'



if __name__ == "__main__":
    app.run(debug=True, use_reloader=True, use_debugger=True) 