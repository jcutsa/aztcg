package com.teamgalactic.aztcg.discount;

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
@RequestMapping("/api/discount/")
@CrossOrigin(origins = "http://localhost:3000")
public class DiscountController {

    @Autowired
    DiscountService discountService;

    @GetMapping("{id}")
    public DiscountResponse getDiscount(@PathVariable long id) {

        DiscountResponse response = null;

        Discount discount = discountService.getDiscount(id);
       
        if (discount == null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Discount not found");
        
        response = new DiscountResponse(discount);

        return response;
    }
    
	@PostMapping("create")
	public DiscountResponse createDiscount(@Valid @RequestBody CreateDiscountRequest createDiscountRequest) {
		
		Discount discount = discountService.createDiscount(createDiscountRequest);
		return new DiscountResponse(discount);
	}
	
	@GetMapping("getAll")
	public List<DiscountResponse> getAllDiscounts() {
	
		List<Discount> discountList = discountService.getAllDiscounts();
		List<DiscountResponse> discountResponseList = new ArrayList<DiscountResponse>();

		for (Discount discount : discountList) {
			discountResponseList.add(new DiscountResponse(discount));
		}
		
		return discountResponseList;
	}
	
	@PutMapping("update")
	public DiscountResponse updateDiscount(@Valid @RequestBody UpdateDiscountRequest updateDiscountRequest) {
		Discount discount = discountService.updateDiscount(updateDiscountRequest);
		
		return new DiscountResponse(discount);
	}
	
	
	@DeleteMapping("delete/{id}")
	public String deleteDiscount(@PathVariable long id) {
		return discountService.deleteDiscount(id);
	}
}


