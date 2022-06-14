import { ApiExecutionMetadata, ApiResponseBase } from '../responses';

export interface ApiCompareOptions {
	/**
	 * The reference input to compute similarity against.
	 */
	reference: string;
	/**
	 * The input(s) that are compared to the reference and ranked based on similarity.
	 */
	candidates: string;
}

export interface ApiCompareSimilarities {
	/**
	 * A single entry from the `candidates` sent in the request.
	 */
	candidate: string;

	/**
	 * Similarity score between `candidate` and `reference`.
	 * It ranges between 0 and 1, the higher the more similar.
	 */
	similarity: number;
}

export interface ApiCompareOutput {
	/**
	 * The `reference` sentence used to compute similarities.
	 */
	reference: string;

	/**
	 * One entry for each member of candidates.
	 */
	similarities: ApiCompareSimilarities[];

	/**
	 * The best match
	 */
	best: string;

	// TODO: does not match the docs
	execution_metadata: ApiExecutionMetadata;
}

export type ApiCompareResponse = ApiResponseBase<ApiCompareOutput>;
