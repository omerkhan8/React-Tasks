import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      text: 'Hello World',
      condition: true
    }

    this.toggleName = this.toggleName.bind(this);
  }

  toggleName() {
    const { condition } = this.state;
    this.setState({
      text: condition ? 'Hello Pakistan' : 'Hello World',
      condition: !condition

    })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.text}</h1>
        </header>
        <button onClick={this.toggleName}>Toggle</button>
      </div>
    );
  }
}

export default App;
