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
      userData: [],
      index: null,
      userObj: null

    }

    this.loginUser = this.loginUser.bind(this);
    this.adToForm = this.adToForm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
  }

  edit(index) {
    const { userData } = this.state;
    let obj = {
      firstName: userData[index].firstName,
      lastName: userData[index].lastName,
      email: userData[index].email,
      salary: userData[index].salary,
      date: userData[index].date
    };
    this.setState({ index, userObj: obj });
  }

  submit(obj) {
    const { userData, index } = this.state;
    index === null ? userData.push(obj) : userData[index] = obj;
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
        {user && !adForm && <Table adToForm={this.adToForm} userData={this.state.userData} edit={this.edit} />}
        {user && adForm && <Form cancel={this.cancel} submit={this.submit} index={this.state.index} userObj ={this.state.userObj} />}
      </div>
    );
  }
}

export default App;
