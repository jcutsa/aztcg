package com.teamgalactic.aztcg.order.item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    OrderItem findByOrderId(Long orderId);
}
