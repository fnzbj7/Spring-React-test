package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Employee {
	
	private @Id @GeneratedValue Long id;
	@Column(unique=true)
	private String name;
	private int age;
	private String email;
	
	public Employee(String name, int age, String email) {
		this.name = name;
		this.age = age;
		this.email = email;
	}
}
