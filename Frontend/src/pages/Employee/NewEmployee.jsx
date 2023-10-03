import { Link } from "react-router-dom";

function NewEmployee() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">
                        Register New Employee
                    </h2>
                    <div className="mb-3 d-flex flex-row justify-content-center">
                        <input type="text" className="form-control w-25 mx-2 d-inline" placeholder="First Name"/>
                        <input type="text" className="form-control w-25 mx-2 d-inline" placeholder="Last Name"/>
                    </div>
                    <div className="mb-3 d-flex flex-row justify-content-center">
                        <input type="text" className="form-control w-50" placeholder="Email"/>
                    </div>
                    <div className="mb-3 d-flex flex-row justify-content-center">
                        <button type="submit" className="btn btn-outline-primary ">Submit</button>
                        <Link to="/employees" className="btn btn-outline-danger mx-2">Cancel</Link>
                    </div>         
                </div>
            </div>
        </div>
    );
}

export default NewEmployee;