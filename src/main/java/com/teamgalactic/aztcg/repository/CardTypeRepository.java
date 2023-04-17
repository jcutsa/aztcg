package com.teamgalactic.aztcg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.CardType;

@Repository
public interface CardTypeRepository extends JpaRepository<CardType, Long> {

}
