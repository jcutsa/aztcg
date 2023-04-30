package com.teamgalactic.aztcg.discount;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateDiscountRequest {
	
	@NotNull(message = "Discount Id is required")
	private Long id;
	
	@JsonProperty("name")
	private String name;

	@JsonProperty("percentage")
	private Double percentage;

	@JsonProperty("active")
	private Integer active;

}
