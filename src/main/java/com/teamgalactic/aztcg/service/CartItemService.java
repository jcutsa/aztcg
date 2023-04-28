package com.teamgalactic.aztcg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamgalactic.aztcg.entity.CartItem;
import com.teamgalactic.aztcg.repository.CartItemRepository;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    public List<CartItem> getCartItemsByCartId(Long cartId) {
        return cartItemRepository.findByShoppingCartId(cartId);
    }
    
    
}
