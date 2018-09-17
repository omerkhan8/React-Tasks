import React, { Component } from 'react';
import './App.css';
import Login from './screens/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLogin: false
    }
  }

  loginUser(){
    
  }

  render() {
    const { userLogin } = this.state;
    return (
      <div>
        {!userLogin && <Login />} 
      </div>
    );
  }
}

export default App;
