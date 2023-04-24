package com.teamgalactic.aztcg.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.Address;
import com.teamgalactic.aztcg.entity.Product;
import com.teamgalactic.aztcg.entity.User;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductResponse {
	
	private Long id;
	
	@JsonProperty("card_key")
	private String cardKey;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("description")
	private String description;
	
	@JsonProperty("quantity_on_hand")
	private Integer quantityOnHand;
	
	@JsonProperty("price")
	private Double price;
	
	@JsonProperty("rarity")
	private String rarity;
	
	@JsonProperty("card_type")
	private CardTypeResponse cardType;

	public ProductResponse(Product product) {
		
		this.id = product.getId();
		this.cardKey = product.getCardKey();
		this.name = product.getName();
		this.description = product.getDescription();
		this.quantityOnHand = product.getQuantityOnHand();
		this.price = product.getPrice();
		this.rarity = product.getRarity();
		this.cardType = new CardTypeResponse(product.getCardType());
		
	}

}
