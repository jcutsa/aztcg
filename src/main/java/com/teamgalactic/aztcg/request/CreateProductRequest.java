package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateProductRequest {

	@JsonProperty("card_key")
	@NotBlank(message="Card key is required")
	private String cardKey;
	
	@JsonProperty("name")
	@NotBlank(message="Name is required")
	private String name;
	
	@JsonProperty("description")
	private String description;
	
	@JsonProperty("quantity_on_hand")
	@NotNull(message="Quantity on hand is required")
	@PositiveOrZero(message="Quantity on hand must be a nonnegative number")
	private Integer quantityOnHand;
	
	@JsonProperty("price")
	@NotNull(message="Price is required")
	@PositiveOrZero(message="Price must be a nonnegative number")
	private Double price;
	
	@JsonProperty("rarity")
	private String rarity;
	
	@JsonProperty("card_type")
	@Min(value=1)
	@Max(value=3)
	@NotNull(message="Card type ID is required")
	private Long cardTypeId;
	
	
	
}