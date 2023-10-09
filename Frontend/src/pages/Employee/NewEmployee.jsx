import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

function NewEmployee() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const navigate = useNavigate();

    function onChangeFunction(event) {
        setUser({ 
            ...user,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event){
        event.preventDefault();
        await EmployeeService.createNewEmployee(user);
        navigate('/');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">
                        Register New Employee
                    </h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        
                        <div className="mb-3 d-flex flex-row justify-content-center">
                            <input type="text" className="form-control w-25 mx-2 d-inline" placeholder="First Name" value={user.firstName} name="firstName" onChange={e => onChangeFunction(e)}/>
                            <input type="text" className="form-control w-25 mx-2 d-inline" placeholder="Last Name" name="lastName" value={user.lastName} onChange={e => onChangeFunction(e)}/>
                        </div>
                        <div className="mb-3 d-flex flex-row justify-content-center">
                            <input type="text" className="form-control w-50" placeholder="Email" name="email" value={user.email} onChange={e => onChangeFunction(e)} />
                        </div>
                        <div className="mb-3 d-flex flex-row justify-content-center">
                            <button type="submit" className="btn btn-primary ">Submit</button>
                            <Link to="/employees" className="btn btn-outline-danger mx-2">Cancel</Link>
                        </div>
                    </form>    
                </div>
            </div>
        </div>
    );
}

export default NewEmployee;