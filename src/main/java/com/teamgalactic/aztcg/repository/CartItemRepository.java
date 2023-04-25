package com.teamgalactic.aztcg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    // get all cart items by cart id
    List<CartItem> findByShoppingCartId(Long shoppingCartId);
	
}
