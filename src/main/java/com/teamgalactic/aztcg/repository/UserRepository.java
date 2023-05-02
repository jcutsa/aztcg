package com.teamgalactic.aztcg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamgalactic.aztcg.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	List<User> findByIdIn(List<Long> ids);
	
}
