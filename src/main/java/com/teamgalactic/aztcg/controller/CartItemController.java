package com.teamgalactic.aztcg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamgalactic.aztcg.entity.CartItem;
import com.teamgalactic.aztcg.repository.CartItemRepository;

@RestController
@RequestMapping("/api/cartitem/")
@CrossOrigin(origins = "http://localhost:3000")
public class CartItemController {

    @Autowired
    CartItemRepository cartItemRepository;
    
    @GetMapping("findbycartid/{cartId}")
    public List<CartItem> getCartItemsByCartId(@PathVariable("cartId") Long cartId) {
        return cartItemRepository.findByShoppingCartId(cartId);
    }

}

