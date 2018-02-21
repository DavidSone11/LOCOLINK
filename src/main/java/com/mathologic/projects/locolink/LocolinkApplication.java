package com.mathologic.projects.locolink;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//@SpringBootApplication
//@EnableMongoRepositories(basePackages = {"com.mathologic.projects.repositories"})
//@ComponentScan(basePackages = { "com.mathologic.projects", "com.mathologic.project.controller","com.mathologic.projects.securityConfiguration"})
//@EntityScan("com.mathologic.project.models")

@ComponentScan(basePackages = { "com.mathologic.projects.locolink" })
@Configuration
@EnableAutoConfiguration
@SpringBootApplication
public class LocolinkApplication {

	public static void main(String[] args) {
		SpringApplication.run(LocolinkApplication.class, args);
	}
}
