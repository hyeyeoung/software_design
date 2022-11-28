from flask import Flask
from flask import Flask, render_template, request, session, redirect, url_for
# render_template 함수는 flask에서 제공하는 함수로 templates에 저장
#
app = Flask(__name__)
@app.route('/')
def root():
    return redirect('/home')

@app.route('/home')
def home():
    return render_template('index.html')
if __name__ == '__main__':
    app.debug = True
    # debug=True 없이 기본으로 실행하면 수정 사항을 반영하기 위해 서버를 재기동해야 한다.
    app.run(debug=True)