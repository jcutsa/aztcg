package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserRequest {

	@JsonProperty("first_name")
	@NotBlank(message="first_name is required")
	private String firstName;
	
	@JsonProperty("last_name")
	@NotBlank(message="last_name is required")
	private String lastName;
	
	@JsonProperty("username")
	@NotBlank(message="username is required")
	private String username;
	
	@JsonProperty("email")
	@NotBlank(message="email (valid email address) is required")
	@Email(message="Must be a valid email address")
	private String email;
	
	@JsonProperty("password")
	@NotBlank(message="password is required")
	private String password;
	
	@JsonProperty("permission_level")
	@PositiveOrZero(message="Permission level must be a nonnegative integer")
	private Integer permissionLevel = 0;
	
}