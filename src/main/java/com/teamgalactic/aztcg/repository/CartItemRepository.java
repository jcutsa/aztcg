package com.teamgalactic.aztcg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
