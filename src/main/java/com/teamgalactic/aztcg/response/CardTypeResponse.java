package com.teamgalactic.aztcg.response;

import com.teamgalactic.aztcg.entity.CardType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CardTypeResponse {

	private Long id;
	
	private String name;
	
	public CardTypeResponse(CardType cardType) {
		this.id = cardType.getId();
		this.name = cardType.getName();
	}
}
