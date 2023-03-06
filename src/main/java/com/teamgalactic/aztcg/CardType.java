package com.teamgalactic.aztcg;

import lombok.Getter;

@Getter
public enum CardType {
	
	DIGIMON("Digimon"), POKEMON("Pokemon"), YUGIOH("Yugioh");
	
	private String name;
	
	private CardType(String name) {
		this.name = name;
	}

	public CardType getCardType(String name) {
		for (CardType ct : CardType.values()) {
			if (ct.name.equalsIgnoreCase(name))
				return ct;
		}
		
		return null;
	}
}
