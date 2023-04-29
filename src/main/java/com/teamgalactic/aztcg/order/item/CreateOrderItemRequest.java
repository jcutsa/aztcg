package com.teamgalactic.aztcg.order.item;


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreateOrderItemRequest {

    @JsonProperty("order_id")
    @NotNull(message="Order id is required")
    private Long orderId;

    @JsonProperty("quantity")
    @NotNull(message="Quantity must be at least 1")
    @Min(value=1)
    private Integer quantity;

    public CreateOrderItemRequest(Long orderId, Integer quantity) {
        this.orderId = orderId;
        this.quantity = quantity;
    }
}

  


