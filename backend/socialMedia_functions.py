import requests
import os

def get_twitter_data(ticker,stockName):
  
  # get tweets based on stock ticker and stock name, then analyze sentiment and return selection of tweets
  url = f"https://api.x.com/2/tweets/search/recent?query={stockName}%20OR%20{ticker}&max_results=10"
  
  headers = {
    "Authorization": "Bearer " + os.environ['TWITTER_BEARER_TOKEN']
  }

  response = requests.get(url, headers=headers)
  tweets = response.json()['data']

  return [tweet['text'] for tweet in tweets]
