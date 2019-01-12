import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Conductor - orchestration tool that gets out of my way</p>
        </header>

        <div>Internet</div>
        <div>Clarify</div>
        <div>Node 1</div>
        <div>Node 1</div>
      </div>
    );
  }
}

export default App;
