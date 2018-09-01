import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  loginPage() {
    return (
      <div>
        <div className='loginDiv'>
          <h2 className='adminHeading'>Admin Login</h2>
          <div id='line'></div>
          <div className="form-group">
            
            <input type="email" className="form-control"  placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">Email associated with admin account.</small>
          </div>
          <div class="form-group">
            <input type="password" className="form-control"  placeholder="Password" />
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

export default App;
