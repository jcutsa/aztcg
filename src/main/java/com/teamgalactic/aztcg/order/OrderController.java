package com.teamgalactic.aztcg.order;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/order/")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("{id}")
    public OrderResponse getOrder(@PathVariable long id) {

        OrderResponse response = null;

        Order order = orderService.getOrder(id);
       
        if (order== null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found");
        
        response = new OrderResponse(order);

        return response;
    }
    
	@PostMapping("create")
	public OrderResponse createOrder(@Valid @RequestBody CreateOrderRequest createOrderRequest) {
		
		Order order = orderService.createOrder(createOrderRequest);
		return new OrderResponse(order);
	}
	
	@GetMapping("getAll")
	public List<OrderResponse> getAllOrders() {
	
		List<Order> orderList = orderService.getAllOrders();
		List<OrderResponse> orderResponseList = new ArrayList<OrderResponse>();

		for (Order order : orderList) {
			orderResponseList.add(new OrderResponse(order));
		}
		
		return orderResponseList;
	}
	
	@PutMapping("update")
	public OrderResponse updateOrder(@Valid @RequestBody UpdateOrderRequest updateOrderRequest) {
		Order order = orderService.updateOrder(updateOrderRequest);
		
		return new OrderResponse(order);
	}
	
	
	@DeleteMapping("delete/{id}")
	public String deleteOrder(@PathVariable long id) {
		return orderService.deleteOrder(id);
	}
}


