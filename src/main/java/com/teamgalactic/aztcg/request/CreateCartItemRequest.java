package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class CreateCartItemRequest {

    @JsonProperty("id")
    @NotNull(message="Cart id is required")
    private Long id;

    @JsonProperty("productId")
    @NotNull(message="Product id is required")
    private Long productId;

    @JsonProperty("quantity")
    @NotNull(message="Quantity must be at least 1")
    @Min(value=1)
    private Integer quantity;

    public CreateCartItemRequest(Long id, Long productId, Integer quantity) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
