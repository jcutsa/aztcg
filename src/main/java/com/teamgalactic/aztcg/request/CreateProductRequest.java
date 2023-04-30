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
	
	@JsonProperty("name")
	@NotBlank(message="name is required")
	private String name;
	
	@JsonProperty("description")
	private String description;
	
	@JsonProperty("quantity_on_hand")
	@NotNull(message="quantity_on_hand (nonnegative integer value) is required")
	@PositiveOrZero(message="quantity_on_hand  must be a nonnegative number")
	private Integer quantityOnHand;
	
	@JsonProperty("price")
	@NotNull(message="price (nonnegative decimal value) is required")
	@PositiveOrZero(message="Price must be a nonnegative number")
	private Double price;
	
	@JsonProperty("rarity")
	private String rarity;
	
	@JsonProperty("card_type")
	@Min(value=1)
	@NotNull(message="card_type (positive ID number) is required")
	private Long cardTypeId;
	
	@JsonProperty("image_url")
	@NotBlank(message="image_url is required")
	private String imageUrl;
	
	
	
}