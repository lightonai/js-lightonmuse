import {
	ApiExecutionMetadata,
	ApiResponseBase,
	ApiScore,
} from '../responses.js';

export interface ApiAnalyseOptions {
	/**
	 * The input(s) that will be analysed.
	 */
	text: string | string[];
}

export interface ApiAnalyseOutput {
	/**
	 * An [Execution metadata](/api/specifications/responses/#execution-metadata) structure.
	 */
	execution_metadata: ApiExecutionMetadata;

	/**
	 * The text that was analysed, from the provided `text` parameter.
	 */
	text: string;

	/**
	 * A `Score` structure.
	 */
	score: ApiScore;
}

export type ApiAnalyseResponse = ApiResponseBase<ApiAnalyseOutput>;
