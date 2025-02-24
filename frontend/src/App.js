import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [data, setdata] = useState({
    name:"",
    date:"",
    msg:""
  })

  //get test data from server
  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
        setdata({
          name:data.name,
          date:data.date,
          msg:data.msg
        });
      })
    );
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Test React calling flask
        </h1>
        <p>{data.name}</p>
        <p>{data.date}</p>
        <p>{data.msg}</p>
      </header>
    </div>
  );
}

export default App;
