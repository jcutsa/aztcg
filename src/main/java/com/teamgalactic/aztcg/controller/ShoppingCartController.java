package com.teamgalactic.aztcg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamgalactic.aztcg.entity.ShoppingCart;
import com.teamgalactic.aztcg.request.CreateCartItemRequest;
import com.teamgalactic.aztcg.request.DeleteCartItemRequest;
import com.teamgalactic.aztcg.request.UpdateCartItemRequest;
import com.teamgalactic.aztcg.response.ShoppingCartResponse;
import com.teamgalactic.aztcg.service.ShoppingCartService;

@RestController
@RequestMapping("/api/cart/")
@CrossOrigin(origins = "http://localhost:3000")
public class ShoppingCartController {

    @Autowired
    ShoppingCartService shoppingCartService;

    @GetMapping("findbyuserid/{userId}")
    public ShoppingCartResponse getShoppingCartByUserId(@PathVariable Long userId) {
        ShoppingCart shoppingCart = shoppingCartService.getShoppingCartByUserId(userId);
        return new ShoppingCartResponse(shoppingCart);
    }
    
    @PostMapping("add/{userId}")
    public ShoppingCartResponse addItemToCart(@PathVariable Long userId, @RequestBody CreateCartItemRequest cartItemRequest) {
        ShoppingCart shoppingCart = shoppingCartService.addItemToCart(userId, cartItemRequest);
        return new ShoppingCartResponse(shoppingCart);
    }

    @PutMapping("update/{userId}")
    public ShoppingCartResponse updateCartItemQuantity(@PathVariable Long userId, @RequestBody UpdateCartItemRequest cartItemRequest) {
        ShoppingCart shoppingCart = shoppingCartService.updateCartItemQuantity(userId, cartItemRequest);
        return new ShoppingCartResponse(shoppingCart);
    }
    
    @DeleteMapping("delete/{userId}")
    public ShoppingCartResponse removeItemFromCart(@PathVariable Long userId, @RequestBody DeleteCartItemRequest cartItemRequest) {
        ShoppingCart shoppingCart = shoppingCartService.deleteItemFromCart(userId, cartItemRequest);
		return new ShoppingCartResponse(shoppingCart);
	}

}
