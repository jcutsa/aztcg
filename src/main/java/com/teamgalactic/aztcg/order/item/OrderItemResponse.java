package com.teamgalactic.aztcg.order.item;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.entity.CartItem;
import com.teamgalactic.aztcg.response.ProductResponse;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderItemResponse {
	
	private Long id;
	
	@JsonProperty("product_id")
	private Long productId;
	
	@JsonProperty("order_id")
	private Long orderId;
	
	@JsonProperty("quantity")
	private Integer quantity;
	
	public OrderItemResponse(OrderItem orderItem) {
		this.id = orderItem.getId();
		this.orderId = orderItem.getOrder().getId();
		this.productId = orderItem.getProduct().getId();
		this.quantity = orderItem.getQuantity();
	}
}
