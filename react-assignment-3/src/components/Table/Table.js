import React, { Component } from 'react';
import './Table.css';

class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.userData
        }
    }

    addEmp() {
        this.props.adToForm();
    }

    floatingBtn() {
        return (
            <div className="floatingBtn" onClick={() => this.addEmp()}>
                <i className="fa fa-plus" style={{ color: 'white' }} ></i>
            </div>
        )
    }

    showTable() {
        const { data } = this.state;
        const iconStyle = {
            color: '#4285F4',
            fontSize: '30px',
            cursor: 'pointer'
        }
        const iconStyle2 = {
            color: 'red',
            fontSize: '30px',
            cursor: 'pointer'
        }
        return (
            <table className="table table-hover ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Job Date Started</th>
                        <th scope="col">Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, indx) => {
                        return (
                            <tr key={Math.random().toString().substr(2, 6)}>
                                <th scope="row">{indx + 1}</th>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.email}</td>
                                <td>{val.salary}</td>
                                <td>{val.date}</td>
                                <td>
                                    <i className="fa fa-edit" style={iconStyle}></i> &nbsp; &nbsp;
                                    <i className="fa fa-trash" style={iconStyle2}></i>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>

        )
    }
    render() {
        document.body.style.backgroundImage = 'none';
        return (
            <div>
                {this.showTable()}
                {this.floatingBtn()}
            </div>
        )
    }
}

export default Table; 