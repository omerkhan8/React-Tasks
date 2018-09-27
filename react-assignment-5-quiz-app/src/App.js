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
    const check = localStorage.getItem('quizTaken');
    if (check === null) {
      console.log('created new');
      let arr = []
      arr = JSON.stringify(arr);
      localStorage.setItem('quizTaken', arr);
    }
  }

  loginUser(userLogin) {
    this.setState({ userLogin });
    localStorage.setItem('userLogin', true);
  }

  logout() {
    this.setState({ userLogin: false });
    localStorage.setItem('userLogin', false);
    localStorage.setItem('showQuizList', null);
    localStorage.setItem('startQuiz', false);
    localStorage.setItem('currentQuizObj', null);
    localStorage.setItem('result', 0);
    localStorage.setItem('index', 0);
    localStorage.setItem('finalScore', null);
    localStorage.setItem('quizTime', null);
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
