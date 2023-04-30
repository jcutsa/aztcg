package com.teamgalactic.aztcg.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.Product;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductResponse {
	
	private Long id;
	
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
	
	@JsonProperty("image_url")
	private String imageUrl;

	public ProductResponse(Product product) {
		
		this.id = product.getId();
		this.name = product.getName();
		this.description = product.getDescription();
		this.quantityOnHand = product.getQuantityOnHand();
		this.price = product.getPrice();
		this.rarity = product.getRarity();
		this.cardType = new CardTypeResponse(product.getCardType());
		this.imageUrl = product.getImageUrl();
		
	}

}
