package com.teamgalactic.aztcg.discount;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiscountService {

	@Autowired
	DiscountRepository discountRepository;
	
	public Discount getDiscount(Long id) {
	
		return discountRepository.findById(id).get();
	}
	
	public Discount createDiscount(CreateDiscountRequest createDiscountRequest) {
		Discount discount = new Discount(createDiscountRequest);
		
		discount = discountRepository.save(discount);
		
		return discount;
	}
	
	
	public Discount updateDiscount(UpdateDiscountRequest updateDiscountRequest) {
		Discount discount = discountRepository.findById(updateDiscountRequest.getId()).get();
		
		String name = updateDiscountRequest.getName();
		Double percentage = updateDiscountRequest.getPercentage();
		Integer active = updateDiscountRequest.getActive();
		
		if (name != null && !name.isEmpty()) discount.setName(name);
		if (percentage != null) discount.setPercentage(percentage);
		if (active != null) discount.setActive(active);
		discount = discountRepository.save(discount);
		
		return discount;
	}
	
	public String deleteDiscount(Long id) {
		discountRepository.deleteById(id);
		return "Discount with id " + id + " has been deleted successfully";
	}
	

	public List<Discount> getAllDiscounts() {
		return discountRepository.findAll();
	}

}
