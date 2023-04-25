package com.teamgalactic.aztcg.discount;


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateDiscountRequest {

	@JsonProperty("name")
	@NotBlank(message="Discount name is required")
	private String name;
	
	@JsonProperty("percentage")
	private Double percentage = 1.0D;
	
}