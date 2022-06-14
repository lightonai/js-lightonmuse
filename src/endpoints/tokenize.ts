import { ApiExecutionMetadata, ApiResponseBase } from '../responses';

// TODO: no doc page for this endpoint
export interface ApiTokenizeOptions {
	/**
	 * The input(s) that will be used by the model for generation, also known as the prompt.
	 * They can be provided either as a single string or as an array of strings for [batch processing](https://muse-docs.lighton.ai/api/specifications/requests#batching).
	 */
	text: string | string[];
}

export interface ApiTokenizeOutput {
	execution_metadata: ApiExecutionMetadata;
	text: string;
	n_tokens: number;
	tokens: string[];
}

export type ApiTokenizeResponse = ApiResponseBase<ApiTokenizeOutput>;
