import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login'
import Table from './components/Table/Table'
// import swal from 'sweetalert';
// import background from './images/background.jpg'

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: false
    }

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    this.setState({ user: true });
  }


  render() {
    const { user } = this.state;
    return (
      <div>
        {!user && <Login loginUser={this.loginUser} />}
        {user && <Table />}
      </div>
    );
  }
}

export default App;
