import requests
import os

def getStockName_fromTicker(ticker):
  data = requests.get(f"https://financialmodelingprep.com/stable/search-symbol?query={ticker}&apikey={os.environ['FMP_API_KEY']}").json()
  return data[0]["name"]