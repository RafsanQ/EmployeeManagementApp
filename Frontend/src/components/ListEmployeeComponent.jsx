import { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }

    async componentDidMount(){
        const response = await EmployeeService.getEmployees();
        this.setState({employees: response.data});
        console.log(response.data);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className='row'>
                    <table className='table table-stripped table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;