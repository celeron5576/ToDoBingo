from flask import Flask,render_template, flash, redirect, request, session

import sqlite3

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

con = sqlite3.connect('TestDB.db')
# データベース作成


#ユーザーテーブル
# id: 主キー　連番
# email: メールアドレス　NOT NULL
# username: ユーザー名
con.execute(
    """CREATE TABLE Users(
        ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        email STRING NOT NULL, 
        password STRING NOT NULL,
        username STRING
        );
        """)

#ToDoテーブル
# id: 主キー
# title: タイトル
# desciption: ToDoの内容
# date: 制作日
# contribution_id: 製作者id
# like_num: いいね数
con.execute(
    """CREATE TABLE ToDos(
        ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, 
        title STRING, 
        description STRING, 
        date INTEGER,
        contribution_id INTEGER,
        like_num INTEGER
        );
        """)

#公開したToDoテーブル
# id: 主キー
# title: タイトル
# desciption: ToDoの内容
# date: 公開日
# contribution_id: 製作者id
# like_num: いいね数
con.execute(
    """CREATE TABLE Released_ToDos(
        ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, 
        title STRING, 
        description STRING, 
        date INTEGER,
        contribution_id INTEGER,
        like_num INTEGER
        );
        """)


#いいねテーブル
con.execute(
    """CREATE TABLE likes(
        ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, 
        contribution_id INTEGER,
        user_id STRING,
        date INTEGER
        );
        """)





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