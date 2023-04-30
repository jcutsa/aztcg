package com.teamgalactic.aztcg.discount;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DiscountResponse {
	
	private Long id;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("percentage")
	private Double percentage;

	@JsonProperty("active")
	private Integer active;

	public DiscountResponse(Discount discount) {
		
		this.id = discount.getId();
		this.name = discount.getName();
		this.percentage = discount.getPercentage();
		this.active = discount.getActive();
	}

}
