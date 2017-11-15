import React, { Component } from 'react';
import Hello from './Hello';
import './App.css';

const logo = "https://www.sellerlabs.com/wp-content/uploads/sites/6/2017/02/SellerLabs_logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <Hello username="Darnell" />
        </header>
        <p className="App-intro">
          Continue editing <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
