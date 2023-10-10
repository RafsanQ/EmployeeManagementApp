package com.employeemanagement.Backend.controller;

import com.employeemanagement.Backend.exception.EmployeeNotFoundException;
import com.employeemanagement.Backend.model.Employee;
import com.employeemanagement.Backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // create a new employee
    @PostMapping("/employee")
    public Employee createNewEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable long id){
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @PutMapping("/employee/{id}")
    public Employee updateEmployeeById(@PathVariable long id, @RequestBody Employee newUserData){
        return employeeRepository.findById(id)
                .map(employee -> {
                    employee.setEmail(newUserData.getEmail());
                    employee.setFirstName((newUserData.getFirstName()));
                    employee.setLastName((newUserData.getLastName()));
                    return employeeRepository.save(employee);
                })
                .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    // Delete an employee
    @PutMapping("/employee/delete/:employeeId")
    public Employee deleteNewEmployee(@RequestParam long employeeId){
        System.out.println(employeeId);
        return new Employee();
    }

}
