import { ApiExecutionMetadata, ApiResponseBase } from '../responses.js';

export interface ApiTokenizeOptions {
	/**
	 * The input(s) that will be used by the model for generation, also known as the prompt.
	 * They can be provided either as a single string or as an array of strings for [batch processing](https://muse-docs.lighton.ai/api/specifications/requests#batching).
	 */
	text: string | string[];
}

export interface ApiTokenizeOutput {
	/**
	 * An [Execution metadata](/api/specifications/responses/#execution-metadata) structure.
	 */
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
