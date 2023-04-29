package com.teamgalactic.aztcg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamgalactic.aztcg.entity.CardType;
import com.teamgalactic.aztcg.entity.Product;
import com.teamgalactic.aztcg.exceptions.ResourceNotFoundException;
import com.teamgalactic.aztcg.repository.CardTypeRepository;
import com.teamgalactic.aztcg.repository.ProductRepository;
import com.teamgalactic.aztcg.request.CreateProductRequest;
import com.teamgalactic.aztcg.request.UpdateProductRequest;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CardTypeRepository cardTypeRepository;
	
	public Product getProduct(Long id) {
		Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found with ID " + id));
		return product;
	}
	
	public Product createProduct(CreateProductRequest createProductRequest) {
		Product product = new Product(createProductRequest);
		
		Long cardTypeId = createProductRequest.getCardTypeId();
		CardType cardType = cardTypeRepository.findById(cardTypeId).orElseThrow(() -> new ResourceNotFoundException("Card type with ID " + cardTypeId + " not found"));
		product.setCardType(cardType);
		
		product = productRepository.save(product);
		
		return product;
	}
	
	
	public Product updateProduct(UpdateProductRequest updateProductRequest) {
		Product product = productRepository.findById(updateProductRequest.getId()).get();
		
		String name = updateProductRequest.getName();
		String description = updateProductRequest.getDescription();
		Integer quantityOnHand = updateProductRequest.getQuantityOnHand();
		Double price = updateProductRequest.getPrice();
		String rarity = updateProductRequest.getRarity();
		
		if (updateProductRequest.getCardTypeId() != null) {
			CardType cardType = cardTypeRepository.findById(updateProductRequest.getCardTypeId()).get();
			product.setCardType(cardType);
		}
		
		if (name != null && !name.isEmpty()) product.setName(name);
		if (description != null && !description.isEmpty()) product.setDescription(description);
		if (quantityOnHand != null) product.setQuantityOnHand(quantityOnHand);
		if (price != null) product.setPrice(price);
		if (rarity != null && !rarity.isEmpty()) product.setRarity(rarity);
		
		product = productRepository.save(product);
		
		return product;
	}
	
	public String deleteProduct(Long id) {
		productRepository.deleteById(id);
		return "Product with id " + id + " has been deleted successfully";
	}
	

	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

}
