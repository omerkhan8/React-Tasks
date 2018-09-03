import React, { Component } from 'react';
import './Form.css'

class Form extends Component {


    showForm() {
        return (
            <div>
                <div className="heading">
                    <h2>Add Employee</h2>
                </div>
                <div className='formDiv'>
                    <input type="text" className='inputTag' placeholder='First Name'/>
                    <input type="text" className='inputTag' placeholder='Last Name'/>
                    <input type="text" className='inputTag' placeholder='Email'/>
                    <input type="text" className='inputTag' placeholder='Salary'/>
                    <input type="date" className='inputTag' placeholder='First Name'/>
                    <button type="submit" className="btn btn-primary ">Confirm</button> &nbsp;
                    <button type="button" className="btn btn-secondary">Cancel</button>
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