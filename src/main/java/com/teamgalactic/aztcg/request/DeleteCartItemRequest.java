package com.teamgalactic.aztcg.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCartItemRequest {
	
	@JsonProperty("id")
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}