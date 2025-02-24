from flask import Flask
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route("/data")
def getTestData():
  return {
    "name":"test data",
    "date":x,
    "msg":"Hello World"
  }

if __name__ == "__main__":
  app.run(debug=True)