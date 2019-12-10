package com.example.demo;

public class EmployeeNotFoundException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7434526204942894163L;

	EmployeeNotFoundException(Long id) {
		super("Could not find employee " + id);
	}
}
