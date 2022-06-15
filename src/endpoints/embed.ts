import { ApiExecutionMetadata, ApiResponseBase } from '../responses';

export interface ApiEmbedOptions {
	/**
	 * The input(s) that will be represented.
	 */
	text: string | string[];
}

export interface ApiEmbedOutput {
	// TODO: does not match the docs
	execution_metadata: ApiExecutionMetadata;

	/**
	 * The text that was represented, from the provided text parameter.
	 */
	text: string;

	/**
	 * Vector representation of the provided text. The size of the representation
	 * depends on the model used, see models for details.
	 */
	embedding: number[];
}

export type ApiEmbedResponse = ApiResponseBase<ApiEmbedOutput>;
