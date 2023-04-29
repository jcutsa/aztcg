package com.teamgalactic.aztcg.order;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = false)
public class ShippedConverter implements AttributeConverter<Boolean, Integer> {
	
    @Override
    public Integer convertToDatabaseColumn(Boolean shipped) {
        return (shipped ? 1 : 0);
    }

    @Override
    public Boolean convertToEntityAttribute(Integer i) {
        return ((i != null) && (i == 1));
    }
}
