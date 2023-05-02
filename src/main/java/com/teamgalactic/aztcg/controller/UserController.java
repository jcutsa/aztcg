package com.teamgalactic.aztcg.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.request.CreateUserRequest;
import com.teamgalactic.aztcg.request.InQueryRequest;
import com.teamgalactic.aztcg.request.UpdateUserRequest;
import com.teamgalactic.aztcg.response.UserResponse;
import com.teamgalactic.aztcg.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/user/")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;

    //private ClientRegistration registration;

    public UserController(/*ClientRegistrationRepository registrations*/) {
        //this.registration = registrations.findByRegistrationId("auth0");
    }

    @GetMapping("{id}")
    public UserResponse getUser(@PathVariable long id) {

        UserResponse response = null;

        User user = userService.getUser(id);
       

        if (user == null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        
        response = new UserResponse(user);

        return response;
    }
    
	@PostMapping("create")
	public UserResponse createUser(@Valid @RequestBody CreateUserRequest createUserRequest) {
		
		User user = userService.createUser(createUserRequest);
		return new UserResponse(user);
	}
	
	@GetMapping("getAll")
	public List<UserResponse> getAllUsers() {
	
		List<User> userList = userService.getAllUsers();
		List<UserResponse> userResponseList = new ArrayList<UserResponse>();

		for (User user : userList) {
			userResponseList.add(new UserResponse(user));
		}
		
		return userResponseList;
	}
	
	@PutMapping("update")
	public UserResponse updateUser(@Valid @RequestBody UpdateUserRequest updateUserRequest) {
		User user = userService.updateUser(updateUserRequest);
		
		return new UserResponse(user);
	}
	
	
	@DeleteMapping("delete/{id}")
	public String deleteUser(@PathVariable long id) {
		return userService.deleteUser(id);
	}

	@PostMapping("getByIdIn")
	public List<UserResponse> getByFirstNameIn(@RequestBody InQueryRequest inQueryRequest) {
		

		
		List<User> userList = userService.getByIdIn(inQueryRequest);
		List<UserResponse> userResponseList = new ArrayList<UserResponse>();
		
		userList.stream().forEach(user -> {
			userResponseList.add(new UserResponse(user));
		});
		
		
		return userResponseList;
	}
	
    /*@PostMapping("logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        // send logout URL to client so they can initiate logout
        StringBuilder logoutUrl = new StringBuilder();
        String issuerUri = this.registration.getProviderDetails().getIssuerUri();
        logoutUrl.append(issuerUri.endsWith("/") ? issuerUri + "v2/logout" : issuerUri + "/v2/logout");
        logoutUrl.append("?client_id=").append(this.registration.getClientId());

        Map<String, String> logoutDetails = new HashMap<>();
        logoutDetails.put("logoutUrl", logoutUrl.toString());
        request.getSession(false).invalidate();
        return ResponseEntity.ok().body(logoutDetails);
    }*/
}


