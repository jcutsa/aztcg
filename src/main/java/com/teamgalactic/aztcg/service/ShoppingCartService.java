package com.teamgalactic.aztcg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamgalactic.aztcg.entity.CartItem;
import com.teamgalactic.aztcg.entity.ShoppingCart;
import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.repository.ShoppingCartRepository;
import com.teamgalactic.aztcg.request.CreateCartItemRequest;
import com.teamgalactic.aztcg.request.DeleteCartItemRequest;
import com.teamgalactic.aztcg.request.UpdateCartItemRequest;

@Service
public class ShoppingCartService {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    public ShoppingCart addItemToCart(Long user_id, CreateCartItemRequest cartItemRequest) {
        // get the user's shopping cart from the database
        ShoppingCart shoppingCart = shoppingCartRepository.findByUser_Id(user_id);

        if (shoppingCart == null) {
            // create a new shopping cart if the user does not have one
            shoppingCart = new ShoppingCart();
            User user = new User();
            user.setId(user_id);
            shoppingCart.setUser(user);
        }

        // check if the product is already in the shopping cart
        boolean productExists = false;
        for (CartItem item : shoppingCart.getItems()) {
            if (item.getProduct().getId().equals(cartItemRequest.getId())) {
                // increment the quantity if the product is already in the shopping cart
                item.setQuantity(item.getQuantity() + cartItemRequest.getQuantity());
                productExists = true;
                break;
            }
        }

        if (!productExists) {
            // create a new cart item if the product is not in the shopping cart
            CartItem item = new CartItem();
            item.setId(cartItemRequest.getId());
            item.setQuantity(cartItemRequest.getQuantity());
            item.setShoppingCart(shoppingCart);
            shoppingCart.getItems().add(item);
        }

        // save the shopping cart to the database
        shoppingCartRepository.save(shoppingCart);

        return shoppingCart;
    }

    public ShoppingCart updateCartItemQuantity(Long user_id, UpdateCartItemRequest updateRequest) {
        // get the user's shopping cart from the database
        ShoppingCart shoppingCart = shoppingCartRepository.findByUser_Id(user_id);

        if (shoppingCart == null) {
            // create a new shopping cart if the user does not have one
            shoppingCart = new ShoppingCart();
            User user = new User();
            user.setId(user_id);
            shoppingCart.setUser(user);
        }

        // find the cart item to update
        CartItem cartItem = null;
        for (CartItem item : shoppingCart.getItems()) {
            if (item.getProduct().getId().equals(updateRequest.getCartItemId())) {
                cartItem = item;
                break;
            }
        }

        if (cartItem != null) {
            // update the cart item quantity
            cartItem.setQuantity(updateRequest.getQuantity());
        }

        // save the shopping cart to the database
        shoppingCartRepository.save(shoppingCart);

        return shoppingCart;
    }

    public ShoppingCart deleteItemFromCart(Long user_id, DeleteCartItemRequest deleteRequest) {
        // get the user's shopping cart from the database
        ShoppingCart shoppingCart = shoppingCartRepository.findByUser_Id(user_id);

        if (shoppingCart == null) {
            // create a new shopping cart if the user does not have one
            shoppingCart = new ShoppingCart();
            User user = new User();
            user.setId(user_id);
            shoppingCart.setUser(user);
        }

        // find the cart item to delete
        CartItem cartItem = null;
        for (CartItem item : shoppingCart.getItems()) {
            if (item.getProduct().getId().equals(deleteRequest.getCartItemId())) {
            	cartItem = item;
            	break;
            }
        }
        if (cartItem != null) {
            // remove the cart item from the shopping cart
            shoppingCart.getItems().remove(cartItem);
        }

        // save the shopping cart to the database
        shoppingCartRepository.save(shoppingCart);

        return shoppingCart;
    }
}

