package com.teamgalactic.aztcg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.Address;

import jakarta.transaction.Transactional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
	
}

