package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCartItemRequest {
	
	@JsonProperty("cart_item_id")
    private Long cartItemId;

    public Long getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(Long cartItemId) {
        this.cartItemId = cartItemId;
    }
}