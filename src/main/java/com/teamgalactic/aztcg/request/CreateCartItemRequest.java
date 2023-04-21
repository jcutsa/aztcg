package com.teamgalactic.aztcg.request;

import javax.validation.constraints.NotNull;

import com.teamgalactic.aztcg.entity.Product;

import jakarta.validation.constraints.Min;

public class CreateCartItemRequest {

    @NotNull
    private Product product;

    @NotNull
    @Min(1)
    private Integer quantity;

    public CreateCartItemRequest(Product product, Integer quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}

