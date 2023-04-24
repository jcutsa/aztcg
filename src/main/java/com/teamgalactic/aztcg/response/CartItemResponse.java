package com.teamgalactic.aztcg.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.CartItem;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CartItemResponse {
	
	private Long id;
	
	@JsonProperty("product_id")
	private ProductResponse product;
	
	@JsonProperty("quantity")
	private Integer quantity;
	
	public CartItemResponse(CartItem cartItem) {
		this.id = cartItem.getId();
		this.product = new ProductResponse(cartItem.getProduct());
		this.quantity = cartItem.getQuantity();
	}
}
