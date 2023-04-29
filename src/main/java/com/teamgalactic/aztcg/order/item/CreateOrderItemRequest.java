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

    @JsonProperty("quantity")
    @Min(value=1,message="Quantity must be 1 or more")
    private Integer quantity;
    
    @JsonProperty("product_id")
    @NotNull(message="Product ID is required")
    private Long productId;

}

  


