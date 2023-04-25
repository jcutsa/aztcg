package com.teamgalactic.aztcg.entity;

import com.teamgalactic.aztcg.request.CreateUserRequest;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
	//When deleting a user, the address will be automatically deleted
	@OneToOne(mappedBy="user", cascade = CascadeType.ALL, orphanRemoval = true)
	private Address shippingAddress;
	
	@Column(name="permission_level")
	private Integer permissionLevel;

	@Transient
	private String fullName;
	
	public User(CreateUserRequest createUserRequest) {
		this.firstName = createUserRequest.getFirstName();
		this.lastName = createUserRequest.getLastName();
		this.email = createUserRequest.getEmail();
		this.username = createUserRequest.getUsername();
		this.password = createUserRequest.getPassword();
		this.fullName = createUserRequest.getFirstName() + " " + createUserRequest.getLastName();
	}
    
    
}

