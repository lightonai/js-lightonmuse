import { ApiSkills } from '.';

export interface ApiResponse {
	request_id: string;
}

// TODO: make guard functions for each case
export interface ApiResponseError extends ApiResponse {
	error_msg: string;
}

export interface ApiResponseSuccess extends ApiResponse {
	outputs: ApiOutput[][];
	total_cost: number;
}

export interface ApiOutput {
	input_text: string;
	completions: ApiCompletion[];
	execution_metadata: ApiExecutionMetadata;
}

export interface ApiCompletion {
	output_text: string;
	score: number;
	normalized_score: number;
	token_scores: ApiScore | null;
	execution_metadata: ApiExecutionMetadata;
}

export interface ApiExecutionMetadata {
	cost: number;
	cost_type: ApiSkills;
	n_tokens_input: number;
	n_tokens_output: number;
	finish_reason: string;
}

export interface ApiScore {
	logprob: number;
	normalized_logprob: number;
	token_logprob: number;
}
