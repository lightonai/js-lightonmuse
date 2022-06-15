import { ApiExecutionMetadata, ApiResponseBase } from '../responses';

export interface ApiTokenizeOptions {
	/**
	 * The input(s) that will be used by the model for generation, also known as the prompt.
	 * They can be provided either as a single string or as an array of strings for [batch processing](https://muse-docs.lighton.ai/api/specifications/requests#batching).
	 */
	text: string | string[];
}

export interface ApiTokenizeOutput {
	// TODO: does not match the docs
	execution_metadata: ApiExecutionMetadata;

	/**
	 * The input `text`.
	 */
	text: string;

	/**
	 * The number of tokens of the input `text`.
	 */
	n_tokens: number;

	/**
	 * An array of tokens of the input `text`.
	 */
	tokens: string[];
}

export type ApiTokenizeResponse = ApiResponseBase<ApiTokenizeOutput>;
