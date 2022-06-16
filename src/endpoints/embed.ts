import { ApiExecutionMetadata, ApiResponseBase } from '../responses.js';

export interface ApiEmbedOptions {
	/**
	 * The input(s) that will be represented.
	 */
	text: string | string[];
}

export interface ApiEmbedOutput {
	/**
	 * An [Execution metadata](/api/specifications/responses/#execution-metadata) structure.
	 */
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
