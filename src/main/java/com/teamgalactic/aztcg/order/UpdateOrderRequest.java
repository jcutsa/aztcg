package com.teamgalactic.aztcg.order;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateOrderRequest {

	@JsonProperty("id")
	@NotNull(message = "Order Id is required")
	private Long id;
	
	@JsonProperty("total")
	@PositiveOrZero(message="Total must be a nonnegative number")
	private Double total;
	
    @JsonFormat(pattern="yyyy/MM/dd HH:mm:ss")
	private Date dateOrdered;
	
	@JsonProperty("shipped")
	private Boolean shipped;
	
}