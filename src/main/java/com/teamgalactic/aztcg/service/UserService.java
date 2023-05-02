package com.teamgalactic.aztcg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.exceptions.ResourceNotFoundException;
import com.teamgalactic.aztcg.repository.AddressRepository;
import com.teamgalactic.aztcg.repository.UserRepository;
import com.teamgalactic.aztcg.request.CreateUserRequest;
import com.teamgalactic.aztcg.request.InQueryRequest;
import com.teamgalactic.aztcg.request.UpdateUserRequest;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AddressRepository addressRepository;
	
	public User getUser(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with ID " + id));
		return user;
	}
	
	public User createUser(CreateUserRequest createUserRequest) {
		User user = new User(createUserRequest);
		
		user = userRepository.save(user);
		
		return user;
	}
	
	
	public User updateUser(UpdateUserRequest updateUserRequest) {
		User user = userRepository.findById(updateUserRequest.getId()).get();
		
		String firstName = updateUserRequest.getFirstName();
		String lastName = updateUserRequest.getLastName();
		String email = updateUserRequest.getEmail();
		String username = updateUserRequest.getUsername();
		String password = updateUserRequest.getPassword();
		Integer permissionLevel = updateUserRequest.getPermissionLevel();
		
		if (firstName != null && !firstName.isEmpty()) user.setFirstName(firstName);
		if (lastName != null && !lastName.isEmpty()) user.setLastName(lastName);
		if (email != null && !email.isEmpty()) user.setEmail(email);
		if (username != null && !username.isEmpty()) user.setUsername(username);
		if (password != null && !password.isEmpty()) user.setPassword(password);
		if (permissionLevel != null) user.setPermissionLevel(permissionLevel);
		
		user = userRepository.save(user);
		
		return user;
	}
	
	public String deleteUser(Long id) {
		userRepository.deleteById(id);
		return "User with id " + id + " has been deleted successfully";
	}
	

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public List<User> getByIdIn(InQueryRequest inQueryRequest) {
		return userRepository.findByIdIn(inQueryRequest.getIds());
	}
}
