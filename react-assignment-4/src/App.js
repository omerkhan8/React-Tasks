import React, { Component } from 'react';
import './App.css';
import offBulb from './bulb/BulbNormal.png';
import Onbulb from './components/OnBulb';
import Brokenbulb from './components/BrokeBulb';

class App extends Component {

  constructor() {
    super();
    this.state = {
      
    }
  }



  showDefaultBulb() {
    return (
      <div className='BulbDiv'>
        <img src={offBulb} alt="offBulb" className='bulbCss' />
      </div>
    )
  }

  showButtons() {
    return (
      <div className='btnDiv'>
        <button className='btnCss green'>Turn ON</button> &nbsp;
        <button className='btnCss red'>Turn OFF</button> &nbsp;
        <button className='btnCss orange'>Broke</button> &nbsp;
      </div>
    )
  }

  render() {
    return (
      <div >
        {this.showDefaultBulb()}
        {this.showButtons()}
      </div>
    );
  }
}

export default App;
