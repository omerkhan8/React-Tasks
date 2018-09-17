import React, { Component } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar';

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='loginDiv'>
                    <h2 className='adminHeading'>Admin Login</h2>
                    <div id='line'></div>
                    <div className="form-group" style={{ marginTop: '30px' }}>
                        <input type="email" className="form-control inputLogin" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control inputLogin" placeholder="Password" />
                    </div>
                    <div className='loginBtn'>
                        <button type="submit" className="btn" >Login</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;