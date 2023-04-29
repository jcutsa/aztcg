package com.teamgalactic.aztcg.order;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.order.item.CreateOrderItemRequest;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateOrderRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
    @JsonProperty("user_id")
    @NotNull(message="User ID is required")
    private Long userId;
    
    @JsonProperty("total")
    @NotNull(message="Total is required")
    private Double total;
    
    @JsonProperty("date")
    @NotNull(message="Date is required")
    @JsonFormat(pattern="yyyy/MM/dd HH:mm:ss")
    private Date dateOrdered;
    
    @JsonProperty("shipped")
    private Boolean shipped;
    
    @JsonProperty("items")
    @NotNull(message="List of order items required")
    List<CreateOrderItemRequest> orderItems;
    
}


