import './App.css';
import React, { useState } from "react";

function App() {

  const [stockData, setStockData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const ticker = data.get("ticker");
    try {
      const response = await fetch("/submitStockTicker", {
        method: "POST",
        body:JSON.stringify({"ticker":ticker.toString()}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const body = await response.json();
      setStockData(body);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the Market Sentiment Analysis App
        </h1>
        <h3>
          Enter a stock ticker below to see sentiment analysis and market value.
        </h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Stock Ticker" name="ticker"/>
          <button type='submit'>Submit</button>
        </form>
      </header>
      {stockData && stockData.length > 0 && (
        <div>
          <h2>{stockData.stockName}</h2>
          <table>
            <thead>
              <tr>
                <th>
                  Tweet
                </th>
              </tr>
            </thead>
            <tbody>
              {stockData.tweets.map((tweet) => (
                <tr>
                  <td>{tweet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default App;
