package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.UniqueConstraint;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Employee {
	
	private @Id @GeneratedValue Long id;
	@Column(unique=true)
	private  String name;
	
	public Employee(String name) {
		this.name = name;
	}
}
