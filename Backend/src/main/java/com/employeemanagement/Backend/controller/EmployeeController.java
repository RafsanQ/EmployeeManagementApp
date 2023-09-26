package com.employeemanagement.Backend.controller;

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

}
