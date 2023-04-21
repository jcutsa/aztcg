package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCartItemRequest {

	@JsonProperty("cart_item_id")
    private Long cartItemId;
	
	@JsonProperty("quantity")
    private Integer quantity;

    public Long getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(Long cartItemId) {
        this.cartItemId = cartItemId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
