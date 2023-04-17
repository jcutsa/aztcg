package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.Address;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAddressRequest {

	@JsonProperty("user_id")
	@NotBlank(message="User ID is required")
	private Long userId;
	
	@JsonProperty("address_line_1")
	@NotBlank(message="Address Line 1 is required")
	private String addressLine1;
	
	@JsonProperty("address_line_2")
	private String addressLine2;
	
	@JsonProperty("first_name")
	@NotBlank(message="First name is required")
	private String firstName;
	
	@JsonProperty("last_name")
	@NotBlank(message="Last name is required")
	private String lastName;
	
	@NotBlank(message="City is required")
	private String city;
	
	@NotBlank(message="Zip is required")
	private String zip;
	
	@NotBlank(message="Country is required")
	private String country;
	
	private String state;
}