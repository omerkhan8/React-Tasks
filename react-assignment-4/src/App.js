import React, { Component } from 'react';
import './App.css';
import offBulb from './bulb/BulbNormal.png';
import Onbulb from './components/OnBulb';
import Brokenbulb from './components/BrokeBulb';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lightOn: false,
      lightOff: true,
      lightBroke: false
    }

    this.lightOn = this.lightOn.bind(this);
    this.lightOff = this.lightOff.bind(this);
    this.lightBroke = this.lightBroke.bind(this);
  }

  lightOn() {
    this.setState({
      lightOn: true,
      lightOff: false,
      lightBroke: false
    });
  }

  lightOff() {
    this.setState({
      lightOn: false,
      lightOff: true,
      lightBroke: false
    });
  }

  lightBroke() {
    this.setState({
      lightOn: false,
      lightOff: false,
      lightBroke: true
    });
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
        <button className='btnCss green' onClick={() => this.lightOn()}>Turn ON</button> &nbsp;
        <button className='btnCss red' onClick={() => this.lightOff()}>Turn OFF</button> &nbsp;
        <button className='btnCss orange' onClick={() => this.lightBroke()}>Broke</button> &nbsp;
      </div>
    )
  }

  render() {
    const { lightOff, lightOn, lightBroke } = this.state;
    return (
      <div >
        {lightOff && this.showDefaultBulb()}
        {lightOn && <Onbulb />}
        {lightBroke && <Brokenbulb />}
        {this.showButtons()}
      </div>
    );
  }
}

export default App;
