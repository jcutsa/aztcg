package com.teamgalactic.aztcg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.response.UserResponse;
import com.teamgalactic.aztcg.service.UserService;

@RestController
@RequestMapping("/api/user/")
public class UserController {
	
	@Autowired
	UserService userService;
	
    
	@GetMapping("{id}")
	public UserResponse getUser(@PathVariable long id) {
	
		UserResponse response = null;
		
		User user = userService.getUser(id);
		
		if (user == null)
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
			
		return response;
	}
}
