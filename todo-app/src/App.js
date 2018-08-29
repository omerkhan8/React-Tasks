import React, { Component } from 'react';
import './App.css';
import logo1 from './images/logo1.png';

class App extends Component {

  renderHeader() {
    return (
      <div className='navBarr'>
        <img src={logo1} alt="logo" className='logo1' />
        Todo App
        </div>
    )
  }

  renderBody() {
    return (
      <div>
        <div className='input'>
          <input type="text" />
          <span className="icon11">
            <i className ="fa fa-plus-square" style={{ fontSize: '40px', color: '#5BB06C', }}></i>
          </span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderBody()}

      </div>

    );
  }
}

export default App;
