import { ApiExecutionMetadata, ApiResponseBase, ApiScore } from '../responses';

export interface ApiAnalyseOptions {
	/**
	 * The input(s) that will be analysed.
	 */
	text: string | string[];
}

export interface ApiAnalyseOutput {
	// TODO: does not match the docs
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
