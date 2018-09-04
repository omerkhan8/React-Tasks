import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
// import swal from 'sweetalert';
// import background from './images/background.jpg'

class App extends Component {

  constructor() {
    super();

    this.state = {
      user: false,
      adForm: false,
      userData: []

    }

    this.loginUser = this.loginUser.bind(this);
    this.adToForm = this.adToForm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(obj) {
    const { userData } = this.state;
    userData.push(obj);
    this.setState({ userData });
  }

  cancel() {
    this.setState({ adForm: false })
  }

  loginUser() {
    this.setState({ user: true });
  }

  adToForm() {
    this.setState({ adForm: true });
  }


  render() {
    const { user, adForm } = this.state;
    return (
      <div>
        {!user && <Login loginUser={this.loginUser} />}
        {user && !adForm && <Table adToForm={this.adToForm} userData={this.state.userData} />}
        {user && adForm && <Form cancel={this.cancel} submit={this.submit} />}
      </div>
    );
  }
}

export default App;
