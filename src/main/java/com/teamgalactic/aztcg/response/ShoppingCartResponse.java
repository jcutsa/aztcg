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
    private Long userId;

    @JsonProperty("cart_items")
    private List<CartItemResponse> cartItems;

    public ShoppingCartResponse(ShoppingCart shoppingCart) {
        this.id = shoppingCart.getId();
        this.userId = shoppingCart.getUser().getId();
        this.cartItems = new ArrayList<>();
        for (CartItem cartItem : shoppingCart.getItems()) {
            this.cartItems.add(new CartItemResponse(cartItem));
        }
    }
}

