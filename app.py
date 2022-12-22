from flask import Flask,render_template, flash, redirect, url_for, request, session
from flask_session import Session
from datetime import timedelta 

import sqlite3

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

app.secret_key = '54UKAMWiZw'
#app.permanent_session_lifetime = timedelta(minutes=3) 


con = sqlite3.connect('TestDB.db')
# データベース作成


# ファイルシステムを使用するようにセッションを構成します (署名付き Cookie の代わりに)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)



def apology(message, code=400):
    """Render message as an apology to user."""
    def escape(s):
        """
        Escape special characters.
        https://github.com/jacebrowning/memegen#special-characters
        """
        for old, new in [("-", "--"), (" ", "-"), ("_", "__"), ("?", "~q"),
                         ("%", "~p"), ("#", "~h"), ("/", "~s"), ("\"", "''")]:
            s = s.replace(old, new)
        return s
    return render_template("apology.html", top=code, bottom=escape(message)), code








###################################################################################
# ホームページを表示する機能
#
# セッション情報を使い、値をセットできるようにしたい
###################################################################################
@app.route('/')
def hello_world():
    return render_template("index.html" ,another = 0)


###################################################################################
# ログイン機能
#
# apologyを使わなくていいようにしたい
###################################################################################
@app.route("/login", methods=["GET", "POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    # POSTの場合
    if request.method == "POST":
        # ユーザーネームが入力されていない
        if not username:
            return apology("ユーザーネームを入力してください", 403)
        # パスワードが入力されていない
        elif not password:
            return apology("パスワードを入力してください", 403)

        con = sqlite3.connect('./TestDB.db')
        db = con.cursor()
        db.execute("SELECT * FROM Users WHERE username = ?", (username,))
        users = db.fetchone()
        con.close()
        # ユーザーネームとパスワードが正しいか確認
        if users != None:
            if users[2] == password:
                #　ユーザーidをクリアする
                session.clear()
                # ユーザーを記憶する
                session["user_id"] = users[0]
                #メッセージ
                flash("ログインしました")
                return redirect("/")
            else:
                return apology("パスワードが違います", 403)
        else:
            return apology("ユーザネームが無効です", 403)

    else:
        return render_template("login.html")


###################################################################################
# ログアウト機能
###################################################################################
@app.route("/logout")
def logout():
    #　ユーザーidをクリアする
    session.clear()
    # ログインページに送る
    return redirect("/")


###################################################################################
# 会員登録機能
#
# apologyを使わなくていいようにしたい
###################################################################################
@app.route("/register", methods=["GET", "POST"])
def register():
    # POSTの場合
    if request.method == "POST":
        # ユーザーネームが入力されていない
        username = request.form.get("username")
        password = request.form.get("password")
        if not username:
            return apology("ユーザーネームを入力してください", 400)
        # ユーザーネームが既に使われている
        con = sqlite3.connect('./TestDB.db')
        db = con.cursor()
        db.execute("SELECT * FROM Users where username=?", (username,))
        user = db.fetchone()
        if user != None:
            return apology("このユーザーネームは既に使われています", 400)
        # パスワードが入力されていない
        elif not password:
            return apology("パスワードを入力してください", 400)
        # パスワードが一致しない
        elif password != request.form.get("confirmation"):
            return apology("パスワードが一致しません", 400)
        con.close()
        # データベースに入れる
        con = sqlite3.connect('./TestDB.db')
        db = con.cursor()
        db.execute("INSERT INTO Users (username, password) VALUES(?, ?)", (username, password))
        con.commit()
        con.close()
        #メッセージ
        flash("登録が完了しました")
        # ログインページに送る
        return redirect("/login")
    else:
        return render_template("register.html")




###################################################################################
# 公開しているToDoを見れる機能
###################################################################################
@app.route("/World_ToDo", methods=["GET", "POST"])
def world_ToDo():
    return render_template("/world_ToDo.html")

###################################################################################
# マイページを編集する機能
###################################################################################
@app.route("/mypage", methods=["GET" ,"POST"])
def mypage():
    return render_template("mypage.html")

###################################################################################
# 保存したToDoを表示する機能
###################################################################################
@app.route("/keep" ,methods=["GET" ,"POST"])
def keep():
    return render_template("keep.html")

###################################################################################
# ToDoを保存する機能
###################################################################################
@app.route("/keep_ToDo" ,methods=["GET" ,"POST"])
def keep_todo():
    title = request.form["box_title"]
    box_size = int(request.form["box_size"])
    box_value = []

    title = "dfjkals;"

    for i in range(box_size):
        value_temp = request.form.get("box_value" + str(i))
        box_value.append(value_temp)

    print(box_value)


    return render_template("index.html" ,another=1 ,title=title)


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True, use_debugger=True) 