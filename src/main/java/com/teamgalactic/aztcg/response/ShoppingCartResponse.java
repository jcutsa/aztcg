package com.teamgalactic.aztcg.response;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.CartItem;
import com.teamgalactic.aztcg.entity.ShoppingCart;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShoppingCartResponse {

	@JsonProperty("id")
    private Long id;

    @JsonProperty("user_id")
    private Long user_id;

    @JsonProperty("cart_items")
    private List<CartItemResponse> cartItems = new ArrayList<>();

    public ShoppingCartResponse(ShoppingCart shoppingCart) {
        this.id = shoppingCart.getId();
        this.user_id = shoppingCart.getUser().getId();
        for (CartItem cartItem : shoppingCart.getItems()) {
            this.cartItems.add(new CartItemResponse(cartItem));
        }
    }
}
