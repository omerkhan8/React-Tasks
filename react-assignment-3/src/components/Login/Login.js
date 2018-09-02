import React, { Component } from 'react';
import './Login.css';
import swal from 'sweetalert';
import background from '../../images/background.jpg'

class Login extends Component {

  constructor() {
    super();
    this.state = {

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
            <input type="email" className="form-control" placeholder="Enter email" />
            <small id="emailHelp" className="form-text" style={{ color: 'white' }}>Email associated with admin account.</small>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className='loginBtn'>
            <button type="submit" className="btn btn-dark">Login</button>
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
