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
      editObj: {
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        date: ''
      }
    }

    this.loginUser = this.loginUser.bind(this);
    this.adToForm = this.adToForm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  edit(index) {
    const { userData } = this.state;
    const { firstName, lastName, email, salary, date } = userData[index];
    let editObj = { firstName, lastName, email, salary, date };
    this.setState({ index, editObj });
  }

  delete(index) {
    let { userData } = this.state;
    userData.splice(index, 1);
    this.setState({ userData });
  }

  submit(obj) {
    let { userData, index, editObj } = this.state;
    index === null ? userData.push(obj) : userData[index] = obj;
    index = null;
    editObj = { firstName: '', lastName: '', email: '', salary: '', date: '' };
    this.setState({ userData, index, editObj });
  }

  cancel() {
    let { editObj } = this.state;
    editObj = { firstName: '', lastName: '', email: '', salary: '', date: '' };
    this.setState({ adForm: false, editObj });
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
        {user && !adForm && <Table adToForm={this.adToForm} userData={this.state.userData} edit={this.edit} delete={this.delete} />}
        {user && adForm && <Form cancel={this.cancel} submit={this.submit} index={this.state.index} editObj={this.state.editObj} />}
      </div>
    );
  }
}

export default App;
