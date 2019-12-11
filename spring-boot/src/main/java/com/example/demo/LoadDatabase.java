package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class LoadDatabase {

	@Bean
	CommandLineRunner initDatabase(EmployeeRepository repository) {
		return args -> {
			log.info("Preloading " + repository.save(new Employee("Bilbo Baggins", 20, "Test@email.com")));
			log.info("Preloading " + repository.save(new Employee("Frodo Baggins", 30, "Test2@email.com")));
			// log.info("Preloading " + repository.save(new Employee("Frodo Baggins")));
		};
	}
}
