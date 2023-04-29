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
    @NotNull(message="user_id is required")
    private Long userId;
    
    @JsonProperty("total")
    @NotNull(message="total (decimal value) is required")
    private Double total;
    
    @JsonProperty("date")
    @NotNull(message="date (yyyy/MM/dd HH:mm:ss) is required")
    @JsonFormat(pattern="yyyy/MM/dd HH:mm:ss")
    private Date dateOrdered;
    
    @JsonProperty("shipped")
    @NotNull(message="shipped (boolean value) is required")
    private Boolean shipped;
    
    @JsonProperty("items")
    @NotNull(message="items (list of order items) is required")
    List<CreateOrderItemRequest> orderItems;
    
}


