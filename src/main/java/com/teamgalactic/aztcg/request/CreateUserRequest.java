package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserRequest {

	@JsonProperty("firstName")
	@NotBlank(message="First name is required")
	private String firstName;
	
	@JsonProperty("lastName")
	@NotBlank(message="Last name is required")
	private String lastName;
	
	@JsonProperty("username")
	@NotBlank(message="Username is required")
	private String username;
	
	@JsonProperty("email")
	@NotBlank(message="Email address is required")
	@Email(message="Must be a valid email address")
	private String email;
	
	@JsonProperty("password")
	@NotBlank(message="Password is required")
	private String password;
	
	@JsonProperty("permissionLevel")
	private Integer permissionLevel = 1;
	
}