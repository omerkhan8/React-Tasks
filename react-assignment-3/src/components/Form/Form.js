import React, { Component } from 'react';
import './Form.css'

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



    cancel() {
        this.props.cancel();
        console.log(this.state);
    }

    showForm() {
        const { firstName } = this.state;
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
                    <button type="submit" className="btn btn-primary ">Confirm</button> &nbsp;
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
