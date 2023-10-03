import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";


function Home() {

    const [users, setUsers] = useState([]);

    const loadData = async () => {
        const data = await EmployeeService.getEmployees();
        setUsers(data);
    }

    useEffect(() => {
        loadData()
    }, []);



    return (
        <div className="container">
            <div className="py-4">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td className="text-end">
                                        <button className="btn btn-primary mx-1">View</button>
                                        <button className="btn btn-outline-primary mx-1">Edit</button>
                                        <button className="btn btn-danger mx-1">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;