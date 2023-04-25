package com.teamgalactic.aztcg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com.teamgalactic.aztcg"})
@EntityScan("com.teamgalactic.aztcg")
@EnableJpaRepositories("com.teamgalactic.aztcg")
public class AztcgApplication {

	public static void main(String[] args) {
		SpringApplication.run(AztcgApplication.class, args);
	}

}
