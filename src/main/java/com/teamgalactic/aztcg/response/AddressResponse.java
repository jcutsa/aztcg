package com.teamgalactic.aztcg.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.Address;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddressResponse {

	private Long id;

	private String state;

	private String city;
	
	@JsonProperty("street")
	private String streetAddress;
	
	private String suite;
	
	public AddressResponse(Address address) {
		this.id = address.getId();
		this.state = address.getState();
		this.city = address.getCity();
		this.streetAddress = address.getStreetAddress();
		this.suite = address.getSuite();
	}
}
