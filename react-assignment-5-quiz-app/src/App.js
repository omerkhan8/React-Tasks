import React, { Component } from 'react';
import './App.css';
import Login from './screens/Login/Login';
import Quizlist from './screens/Quizlist/Quizlist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLogin: false
    }

    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    this.setState({ userLogin });
  }

  loginUser(userLogin) {
    this.setState({ userLogin });
    localStorage.setItem('userLogin', true);
  }

  logout() {
    this.setState({ userLogin: false });
    localStorage.setItem('userLogin', false);
    localStorage.setItem('showQuizList',null);
    localStorage.setItem('startQuiz',false);
  }

  render() {
    let { userLogin } = this.state;
    return (
      <div>
        {!userLogin ? <Login loginUser={this.loginUser} /> : <Quizlist logout={this.logout} />}
      </div>
    );
  }
}

export default App;
