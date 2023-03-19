package com.teamgalactic.aztcg.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.Address;
import com.teamgalactic.aztcg.entity.User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserResponse {
	
	private long id;
	
	private String username;
	
	@JsonProperty("first_name")
	private String firstName;
	
	@JsonProperty("last_name")
	private String lastName;

	private String email;
	
	@JsonProperty("billing_address")
	private Address billingAddress;
	
	@JsonProperty("shipping_address")
	private Address shippingAddress;
	
	
	public UserResponse(User user) {
		
		this.id = user.getId();
		this.username = user.getUsername();
		this.firstName = user.getFirstName();
		this.lastName = user.getLastName();
		this.email = user.getEmail();
		this.billingAddress = user.getBillingAddress();
		this.shippingAddress = user.getShippingAddress();
	}

}
