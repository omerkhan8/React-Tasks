import React, { Component } from 'react';
import './Table.css';

class Table extends Component {

    floatingBtn() {
        return (
            <div className="floatingBtn">
                <i class="fa fa-plus" style={{color:'white'}}></i>
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
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>what</td>
                        <td>@twitter</td>
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