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
public class AddressResponse {

	private Long id;
 
	@JsonProperty("address_line_1")
	private String addressLine1;

	@JsonProperty("address_line_2")
	private String addressLine2;
	
	private String zip;
	
	private String city;
	
	private String state;
	
	private String country;
	
	private User user;
	
	public AddressResponse(Address address) {
		this.id = address.getId();
		this.addressLine1 = address.getAddressLine1();
		this.addressLine2 = address.getAddressLine2();
		this.zip = address.getZip();
		this.state = address.getState();
		this.city = address.getCity();
		this.country = address.getCountry();
		this.user = address.getUser();
	}
}
