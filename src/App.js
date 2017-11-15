import React, { Component } from 'react';
import Hello from './Hello';
import UserTable from './UserTable';
import './App.css';

const logo = "https://www.sellerlabs.com/wp-content/uploads/sites/6/2017/02/SellerLabs_logo.png";
const users = [
  {username: 'Darnell', password: 'nqfy4&HD1$Cg95cp', role: 'admin'},
  {username: 'Jimbob', password: 'passwurd', role: 'standard'},
  {username: 'Jenny', password: '8675309', role: 'editor'},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <Hello username="Darnell" />
        </header>
        <UserTable users={ users } />
      </div>
    );
  }
}

export default App;
