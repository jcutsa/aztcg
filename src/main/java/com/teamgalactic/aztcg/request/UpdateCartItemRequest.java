package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCartItemRequest {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("quantity")
    private Integer quantity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
