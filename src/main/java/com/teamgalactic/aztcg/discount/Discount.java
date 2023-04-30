package com.teamgalactic.aztcg.discount;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="discount")
public class Discount {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	private String name;
	
	private Double percentage;
	 
	private Integer active;
	
	public Discount(CreateDiscountRequest createDiscountRequest) {
		this.name = createDiscountRequest.getName();
		this.percentage = createDiscountRequest.getPercentage();
		this.active = createDiscountRequest.getActive();
	}
}
