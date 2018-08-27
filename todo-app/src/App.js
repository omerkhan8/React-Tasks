import React, { Component } from 'react';
import './App.css';
import logo1 from './images/logo1.png';

class App extends Component {

  renderHeader() {
    return (
        <div className='nav'>
          <img src={logo1} alt="logo" className='logo1' />
          Todo App
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
