package com.teamgalactic.aztcg.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "cart")
public class ShoppingCart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;

	@Column(name = "total")
	private Double total;

	@OneToMany(mappedBy = "shoppingCart", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<CartItem> items = new ArrayList<>();

	public ShoppingCart(User user, Double total) {
		this.user = user;
		this.total = total;
		this.items = new ArrayList<>();
	}
}
