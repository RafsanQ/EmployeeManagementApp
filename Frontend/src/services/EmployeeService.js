import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';
const EMPLOYEE_API_CREATE_NEW_URL = 'http://localhost:8080/api/v1/employee';

class EmployeeService{
    async getEmployees(){
        return (await axios.get(EMPLOYEE_API_BASE_URL)).data;
    }

    async createNewEmployee(employee){
        await axios.post(EMPLOYEE_API_CREATE_NEW_URL, employee);
    }
}

export default new EmployeeService();
