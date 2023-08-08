form flask import Flask

app = Flask(_name__)
@app.ruote('/')
def hello_world():
    return 'Hello, World! '

if __name__ == "__main__":
    app.run(debug = true)