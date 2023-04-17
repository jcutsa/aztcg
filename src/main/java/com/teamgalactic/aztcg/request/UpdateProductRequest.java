package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateProductRequest {

	@JsonProperty("id")
	@NotNull(message = "Product Id is required")
	private Long id;
	
	@JsonProperty("card_key")
	private String cardKey;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("description")
	private String description;
	
	@JsonProperty("quantity_on_hand")
	@PositiveOrZero(message="Quantity on hand must be a nonnegative number")
	private Integer quantityOnHand;
	
	@JsonProperty("price")
	@PositiveOrZero(message="Price must be a nonnegative number")
	private Double price;
	
	@JsonProperty("rarity")
	private String rarity;
	
	@JsonProperty("card_type")
	@Min(value=1)
	@Max(value=3)
	private Long cardTypeId;
	
	
	
}