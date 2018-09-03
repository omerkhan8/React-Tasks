import React, { Component } from 'react';
import './Table.css';

class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    addEmp() {
        this.props.adToForm();
    }

    floatingBtn() {
        return (
            <div className="floatingBtn">
                <i className="fa fa-plus" style={{ color: 'white' }} onClick={() => this.addEmp()}></i>
            </div>
        )
    }

    showTable() {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>haha</td>
                    </tr>

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