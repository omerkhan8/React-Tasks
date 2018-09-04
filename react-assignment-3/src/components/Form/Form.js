import React, { Component } from 'react';
import './Form.css';
import swal from 'sweetalert';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            salary: '',
            date: ''

        }


    }

    submit() {
        const { firstName, lastName, email, salary, date } = this.state;
        if (firstName === '' || lastName === '' || email === '' || salary === '' || date === '') {
            swal({ title: 'please enter the empty fields', icon: 'warning' });
        }
        else {
            let obj = { firstName, lastName, email, salary, date };
            this.props.submit(obj);
            this.props.cancel();
        }
    }

    cancel() {
        this.props.cancel();
    }

    showForm() {

        return (
            <div>
                <div className="heading">
                    <h2>Add Employee</h2>
                </div>
                <div className='formDiv'>
                    <input type="text" className='inputTag' placeholder='First Name' onChange={(e) => this.setState({ firstName: e.target.value })} />
                    <input type="text" className='inputTag' placeholder='Last Name' onChange={(e) => this.setState({ lastName: e.target.value })} />
                    <input type="text" className='inputTag' placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })} />
                    <input type="text" className='inputTag' placeholder='Salary' onChange={(e) => this.setState({ salary: e.target.value })} />
                    <input type="date" className='inputTag' onChange={(e) => this.setState({ date: e.target.value })} />
                    <button type="submit" className="btn btn-primary " onClick={() => this.submit()}>Confirm</button> &nbsp;
                    <button type="button" className="btn btn-secondary" onClick={() => this.cancel()}>Cancel</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.showForm()}
            </div>
        )
    }
}

export default Form;
