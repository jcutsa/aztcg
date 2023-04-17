package com.teamgalactic.aztcg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.Product;
import com.teamgalactic.aztcg.entity.User;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	
}
