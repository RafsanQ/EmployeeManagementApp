import { useState } from "react";
import { Link } from "react-router-dom";

function NewEmployee() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

   

    // const onInputChange = (event) => {
    //     // setUser({
    //     //     ...user,
    //     //     [event.target.name]: event.target.value
    //     // });
    //     // console.log(event.target.name);
    // }

    function changeFirstName(event) {
        setUser({ 
            ...user,
            [event.target.name]: event.target.value
        })

        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">
                        Register New Employee
                    </h2>
                    <div className="mb-3 d-flex flex-row justify-content-center">
                        <input type="text" className="form-control w-25 mx-2 d-inline" placeholder="First Name" value={user.firstName} name="firstName" onChange={e => changeFirstName(e)}/>
                        <input type="text" className="form-control w-25 mx-2 d-inline" placeholder="Last Name" name="lastName" value={user.lastName} onChange={e => changeFirstName(e)}/>
                    </div>
                    <div className="mb-3 d-flex flex-row justify-content-center">
                        <input type="text" className="form-control w-50" placeholder="Email" name="email" value={user.email} onChange={e => changeFirstName(e)} />
                    </div>
                    <div className="mb-3 d-flex flex-row justify-content-center">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                        <Link to="/employees" className="btn btn-outline-danger mx-2">Cancel</Link>
                    </div>         
                </div>
            </div>
        </div>
    );
}

export default NewEmployee;