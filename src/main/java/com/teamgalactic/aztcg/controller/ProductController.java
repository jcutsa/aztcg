package com.teamgalactic.aztcg.controller;

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

import com.teamgalactic.aztcg.entity.Product;
import com.teamgalactic.aztcg.request.CreateProductRequest;
import com.teamgalactic.aztcg.request.UpdateProductRequest;
import com.teamgalactic.aztcg.response.ProductResponse;
import com.teamgalactic.aztcg.service.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/product/")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("{id}")
    public ProductResponse getProduct(@PathVariable long id) {

        ProductResponse response = null;

        Product product = productService.getProduct(id);
       

        if (product == null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
        
        response = new ProductResponse(product);

        return response;
    }
    
	@PostMapping("create")
	public ProductResponse createProduct(@Valid @RequestBody CreateProductRequest createProductRequest) {
		
		Product product = productService.createProduct(createProductRequest);
		return new ProductResponse(product);
	}
	
	@GetMapping("getAll")
	public List<ProductResponse> getAllProducts() {
	
		List<Product> productList = productService.getAllProducts();
		List<ProductResponse> productResponseList = new ArrayList<ProductResponse>();

		for (Product product : productList) {
			productResponseList.add(new ProductResponse(product));
		}
		
		return productResponseList;
	}
	
	@PutMapping("update")
	public ProductResponse updateProduct(@Valid @RequestBody UpdateProductRequest updateProductRequest) {
		Product product = productService.updateProduct(updateProductRequest);
		
		return new ProductResponse(product);
	}
	
	
	@DeleteMapping("delete/{id}")
	public String deleteProduct(@PathVariable long id) {
		return productService.deleteProduct(id);
	}
}


