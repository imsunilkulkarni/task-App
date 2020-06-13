import React from 'react';
import Body from "./components/Body"
import Header from "./components/Header"
import Router from "react-router";
import { Link, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <div>
      <Header />
      </div> */}
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
