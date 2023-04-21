package com.teamgalactic.aztcg.entity;

import com.teamgalactic.aztcg.request.CreateCartItemRequest;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="cart_item")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="cart_id")
    private ShoppingCart shoppingCart;

    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    @Column(name="quantity")
    private Integer quantity;

    public CartItem(CreateCartItemRequest createCartItemRequest) {
        this.product = createCartItemRequest.getProduct();
        this.quantity = createCartItemRequest.getQuantity();
    }
}