package com.teamgalactic.aztcg.entity;

import com.teamgalactic.aztcg.request.CreateProductRequest;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "card_type_id")
	private CardType cardType;
	
	@Column(name="price")
	private Double price;
	
	@Column(name="rarity")
	private String rarity;
	
	@Column(name="image_url")
	private String imageUrl;
	
	@Column(name="quantity_on_hand")
	private Integer quantityOnHand;
	

	
	public Product(CreateProductRequest createProductRequest) {
		this.name = createProductRequest.getName();
		this.description = createProductRequest.getDescription();
		this.price = createProductRequest.getPrice();
		this.rarity = createProductRequest.getRarity();
		this.quantityOnHand = createProductRequest.getQuantityOnHand();
		this.imageUrl = createProductRequest.getImageUrl();
	}
	
}
