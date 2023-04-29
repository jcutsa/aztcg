package com.teamgalactic.aztcg.order;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.order.item.CreateOrderItemRequest;
import com.teamgalactic.aztcg.order.item.OrderItem;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="order_detail")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();
	
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    
    private Double total;
    
    @Column(name="date_ordered", columnDefinition = "DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateOrdered;
    
    @Convert(converter=ShippedConverter.class)
    @Column(name="shipped")
    private Boolean shipped;
    
	public Order(CreateOrderRequest createOrderRequest) {
		
		this.total = createOrderRequest.getTotal();
		this.dateOrdered = createOrderRequest.getDateOrdered();
		this.shipped = createOrderRequest.getShipped();
		
	}
    
    
}