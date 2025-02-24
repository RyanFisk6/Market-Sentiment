from flask import Flask,request
from util import getStockName_fromTicker
from socialMedia_functions import get_twitter_data
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route("/submitStockTicker", methods=["POST"])
def getStockTickerData():
  ticker = request.json.get("ticker")

  if ticker is None:
    return {
      "error": "No ticker provided"
    }

  stockName = getStockName_fromTicker(ticker)

  twitterData = get_twitter_data(ticker,stockName)

  return {
    "stockName": stockName,
    "tweets": twitterData
  }

if __name__ == "__main__":
  app.run(debug=True)