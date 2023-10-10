package com.employeemanagement.Backend.exception;

public class EmployeeNotFoundException extends RuntimeException{
    public EmployeeNotFoundException(long id){
        super("Could not find the Employee with ID " + id);
    }
}
