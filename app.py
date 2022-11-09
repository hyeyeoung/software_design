from flask import Flask
from flask import Flask, render_template, request, session, redirect, url_for
app = Flask(__name__)

@app.route('/')
def root():
    return redirect(url_for('home'))

@app.route('/home')
def home():
    return render_template('seoul_cctv.html')

if __name__ == '__main__':
    app.debug = True
    app.run(debug=True)