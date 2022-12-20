from flask import Flask,render_template, flash, redirect, request, session

import sqlite3

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

con = sqlite3.connect('TestDB.db')
# データベース作成


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/login')
def login():
    return render_template("login.html")



if __name__ == "__main__":
    app.run(debug=True, use_reloader=True, use_debugger=True) 