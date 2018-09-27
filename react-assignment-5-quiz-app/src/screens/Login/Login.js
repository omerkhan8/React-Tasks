import React, { Component } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            signup: false,
            userName: '',
            email: '',
            password: ''

        };
    }

    showSignup() {
        this.setState({ signup: true })
    }

    signUp() {
        let { userName, email, password } = this.state;
        if (userName === '' || email === '' || password === '') {
            alert('please fill the empty fields')
        }
        else {
            let userData = { userName, email, password, };
            userData = JSON.stringify(userData);
            localStorage.setItem('userData', userData);
            email = '';
            password = '';
            this.setState({ signup: false, email, password });
        }
    }

    loginUser() {
        const { email, password } = this.state;
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData !== null) {
            if (email === userData.email && password === userData.password) {
                this.props.loginUser(true);
            }
            else {
                alert('invalid email / password entered')
                this.setState({ email: '', password: '' });
            }
        }
        else {
            alert('please signup first');
            this.setState({ email: '', password: '' });
        }

    }



    renderSignup() {
        return (
            <div className='loginDiv'>
                <h2 className='adminHeading'>SignUP</h2>
                <div id='line'></div>
                <div className="form-group" style={{ marginTop: '30px' }}>
                    <input type="text" className="form-control inputLogin" placeholder="User name" onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control inputLogin" placeholder="Enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control inputLogin" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                </div>
                <div className='loginBtn'>
                    <button type="submit" className="btn" onClick={() => this.signUp()} >Signup</button>
                </div>
            </div>
        )
    }

    renderLogin() {
        const { email, password } = this.state;
        return (
            <div className='loginDiv'>
                <h2 className='adminHeading'>Login</h2>
                <div id='line'></div>
                <div className="form-group" style={{ marginTop: '30px' }}>
                    <input type="email" className="form-control inputLogin" placeholder="Enter email" value={email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control inputLogin" placeholder="Password" value={password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                </div>
                <div className='loginBtn'>
                    <button type="submit" className="btn" onClick={() => this.loginUser()} >Login</button>
                </div>
                <p id="signupText">don't have an account? <a href="javascript:void(0)" onClick={() => this.showSignup()}>SignUp</a></p>
            </div>

        )
    }

    render() {
        const { signup } = this.state;
        return (
            <div>
                <Navbar />
                {signup ? this.renderSignup() : this.renderLogin()}
            </div>
        )
    }
}

export default Login;