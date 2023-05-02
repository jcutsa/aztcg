package com.teamgalactic.aztcg.order;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.teamgalactic.aztcg.order.item.OrderItem;
import com.teamgalactic.aztcg.order.item.OrderItemResponse;


public class OrderResponse {
	@JsonProperty("id")
    private Long id;

    @JsonProperty("user_id")
    private Long user_id;
    
    @JsonProperty("shipped")
    private Boolean shipped;
    
    @JsonProperty("date")
    @JsonFormat(pattern="yyyy/MM/dd HH:mm:ss")
    private Date dateOrdered;
    
    @JsonProperty("total")
    private Double total;
    
    @JsonProperty("order_items")
    private List<OrderItemResponse> orderItems = new ArrayList<>();

    public OrderResponse(Order order) {
        this.id = order.getId();
        this.dateOrdered = order.getDateOrdered();
        this.total = order.getTotal();
        this.shipped = order.getShipped();
        this.user_id = order.getUser().getId();
        for (OrderItem orderItem :  order.getItems()) {
            this.orderItems.add(new OrderItemResponse(orderItem));
        }
    }

}
