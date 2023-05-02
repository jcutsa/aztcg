package com.teamgalactic.aztcg.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class InQueryRequest {

	@JsonProperty("ids")
	@NotNull(message="ids (array of ids) is required")
	private List<Long> ids;
}
