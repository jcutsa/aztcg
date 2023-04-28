package com.teamgalactic.aztcg.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamgalactic.aztcg.entity.CartItem;
import com.teamgalactic.aztcg.repository.CartItemRepository;
import com.teamgalactic.aztcg.response.CartItemResponse;
import com.teamgalactic.aztcg.service.CartItemService;

@RestController
@RequestMapping("/api/cartitem/")
@CrossOrigin(origins = "http://localhost:3000")
public class CartItemController {

    @Autowired
    CartItemRepository cartItemRepository;
    
    @Autowired
    CartItemService cartItemService;
    
    @GetMapping("getAll")
    public ResponseEntity<List<CartItemResponse>> getAllCartItems() {
        List<CartItem> cartItems = cartItemService.getAllCartItems();
        List<CartItemResponse> response = new ArrayList<>();
        for (CartItem item : cartItems) {
            response.add(new CartItemResponse(item));
        }
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("findbycartid/{cartId}")
    public List<CartItem> getCartItemsByCartId(@PathVariable("cartId") Long cartId) {
        return cartItemRepository.findByShoppingCartId(cartId);
    }

}

