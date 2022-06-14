export interface ApiScore {
	/**
	 * The overall log-probability of the entire text processed.
	 */
	logprob: number;

	/**
	 * The same as `logprob`, but normalized for text length (number of tokens).
	 */
	normalized_logprob: number;

	/**
	 * A dictionary including the specific log-probability of each token.
	 */
	token_logprob: null | Record<string, number>;
}

export interface ApiExecutionMetadataCost {
	/**
	 * The number of tokens used.
	 */
	tokens_used: number;

	/**
	 * The number of tokens sent in input to the model.
	 */
	tokens_input: number;

	/**
	 * The number of tokens generated by the model.
	 */
	tokens_generated: number;

	/**
	 * String with the form `model_name@skill`, indicating the nature of the tokens used (if no skills are used, it will be replaced by `default`)
	 */
	cost_type: string;

	/**
	 * The number of requests made in a single batch; and a `finish_reason` entry,
	 * explaining why did the model stopped processing further tokens (`length` if
	 * stopped by `n_tokens` or by reaching the end of the text to process,
	 * or `stop_word` if reached one of the `stop_words`).
	 */
	batch_size: number;
}

// TODO: does not match the docs
export interface ApiExecutionMetadata {
	// TODO: does not match the docs
	cost: ApiExecutionMetadataCost;

	// TODO: does not match the docs
	finish_reason: string;
}

export interface ApiModelCosts {
	total_tokens_used: number;
	total_tokens_input: number;
	total_tokens_generated: number;
	batch_size: number;
}

export interface ApiResponseBase<Output> {
	request_id: string;
	/**
	 * Has the same form than batching request.
	 */
	outputs: Output[][];
	/**
	 * A record with the name of the model and the number of tokens that was used.
	 */
	costs: Record<string, ApiModelCosts>;
}
