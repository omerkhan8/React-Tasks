import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login'
// import swal from 'sweetalert';
// import background from './images/background.jpg'

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
