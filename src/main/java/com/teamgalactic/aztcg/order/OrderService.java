package com.teamgalactic.aztcg.order;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamgalactic.aztcg.entity.Product;
import com.teamgalactic.aztcg.entity.User;
import com.teamgalactic.aztcg.exceptions.ResourceNotFoundException;
import com.teamgalactic.aztcg.order.item.CreateOrderItemRequest;
import com.teamgalactic.aztcg.order.item.OrderItem;
import com.teamgalactic.aztcg.order.item.OrderItemRepository;
import com.teamgalactic.aztcg.service.ProductService;
import com.teamgalactic.aztcg.service.UserService;

@Service
public class OrderService {

	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	OrderItemRepository orderItemRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired
	ProductService productService;
	
	public Order getOrder(Long id) {
		Order order = orderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found with ID " + id));
		return order;
	}
	
	public Order createOrder(CreateOrderRequest createOrderRequest) {
		
		Order order = new Order(createOrderRequest);
		
		Long userId = createOrderRequest.getUserId();
		User user = userService.getUser(userId);
		
		order.setUser(user);
		order = orderRepository.save(order);
		
		List<OrderItem> orderItemsList = new ArrayList<OrderItem>();
		
		if (createOrderRequest.getOrderItems() != null) {
			for (CreateOrderItemRequest createOrderItemRequest : createOrderRequest.getOrderItems()) {
				OrderItem orderItem = new OrderItem(createOrderItemRequest);
				
				Product product = productService.getProduct(createOrderItemRequest.getProductId());
				orderItem.setProduct(product);
				orderItem.setOrder(order);
				orderItemsList.add(orderItem);
				productService.reduceQuantityOnHand(product, orderItem.getQuantity());
				
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
