package com.teamgalactic.aztcg.order.item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.ShoppingCart;
import com.teamgalactic.aztcg.order.Order;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    OrderItem findByUserId(Long userId);
}
