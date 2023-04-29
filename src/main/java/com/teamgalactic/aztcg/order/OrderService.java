package com.teamgalactic.aztcg.order;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.security.auth.Subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.exceptions.ResourceNotFoundException;
import com.teamgalactic.aztcg.order.item.CreateOrderItemRequest;
import com.teamgalactic.aztcg.order.item.OrderItem;
import com.teamgalactic.aztcg.order.item.OrderItemRepository;
import com.teamgalactic.aztcg.repository.UserRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	OrderItemRepository orderItemRepository;
	
	@Autowired
	UserRepository userRepository;
	

	
	public Order getOrder(Long id) {
		Order order = orderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found with ID " + id));
		return order;
	}
	
	public Order createOrder(CreateOrderRequest createOrderRequest) {
		
		Order order = new Order(createOrderRequest);
		
		Long userId = createOrderRequest.getUserId();
		User user = userRepository.findById(createOrderRequest.getUserId()).orElseThrow(() -> new ResourceNotFoundException("User not found with ID " + userId));
		
		order.setUser(user);
		order = orderRepository.save(order);
		
		List<OrderItem> orderItemsList = new ArrayList<OrderItem>();
		
		if (createOrderRequest.getOrderItems() != null) {
			for (CreateOrderItemRequest createOrderItemRequest : createOrderRequest.getOrderItems()) {
				OrderItem orderItem = new OrderItem(createOrderItemRequest);
				orderItem.setOrder(order);
				orderItemsList.add(orderItem);
			}
			
			orderItemRepository.saveAll(orderItemsList);
		}
		
		
		order.setItems(orderItemsList);
		
		return order;
	
	}
	
	
	public Order updateOrder(UpdateOrderRequest updateOrderRequest) {
		Order order = orderRepository.findById(updateOrderRequest.getId()).get();
		
		Double total = updateOrderRequest.getTotal();
		Date date = updateOrderRequest.getDateOrdered();
		Boolean shipped = updateOrderRequest.getShipped();
		
		if (total != null) order.setTotal(total);
		if (date != null) order.setDateOrdered(date);
		if (shipped != null) order.setShipped(shipped);
		
		order = orderRepository.save(order);
		
		return order;
	}
	
	public String deleteOrder(Long id) {
		orderRepository.deleteById(id);
		return "Order with id " + id + " has been deleted successfully";
	}
	

	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

}
