package com.teamgalactic.aztcg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.repository.AddressRepository;
import com.teamgalactic.aztcg.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AddressRepository addressRepository;
	
	public User getUser(Long id) {
	
		return userRepository.findById(id).orElse(null);
	}

}
