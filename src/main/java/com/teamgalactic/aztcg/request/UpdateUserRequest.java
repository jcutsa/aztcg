package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.Address;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserRequest {
	
	@NotNull(message = "User Id is required")
	private Long id;
	
	@JsonProperty("first_name")
	private String firstName;
	
	@JsonProperty("last_name")
	private String lastName;
	
	@Email(message="Must be a valid email address")
	private String email;
	
	private String username;
	
	private String password;
	
	@JsonProperty("permission_level")
	@PositiveOrZero(message="Permission level must be a nonnegative integer")
	private Integer permissionLevel;

}
