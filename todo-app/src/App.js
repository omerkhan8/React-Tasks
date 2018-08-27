import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  renderHeader() {
    return (
      <div>
        <div className='nav'>Todo App</div>
      </div>
    )
  }


  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
      
    );
  }
}

export default App;
