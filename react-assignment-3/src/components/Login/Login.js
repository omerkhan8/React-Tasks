import React, { Component } from 'react';
import './Login.css';
import swal from 'sweetalert';
import background from '../../images/background.jpg'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.login = this.login.bind(this);
  }

  getEmail(e) {
    let email = e.target.value;
    this.setState({ email });
  }

  getPassword(e) {
    let password = e.target.value;
    this.setState({ password });
  }

  login() {
    const { email, password } = this.state;
    if (email === 'admin@domain.com' && password === 'admin') {
      this.props.loginUser();
    }
    else {
      swal({
        title: 'Wrong Credentials',
        icon: 'error'
      });
    }
  }

  loginPage() {

    document.body.style.backgroundImage = `url(${background})`
    return (
      <div>
        <div className='loginDiv'>
          <h2 className='adminHeading'>Admin Login</h2>
          <div id='line'></div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.getEmail(e)} />
            <small id="emailHelp" className="form-text" style={{ color: 'white' }}>Email associated with admin account.</small>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.getPassword(e)} />
          </div>
          <div className='loginBtn'>
            <button type="submit" className="btn btn-dark" onClick={this.login}>Login</button>
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div>
        {this.loginPage()}
      </div>
    );
  }
}

export default Login;
