package com.teamgalactic.aztcg.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.ShoppingCart;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    Order findByUserId(Long userId);

}
