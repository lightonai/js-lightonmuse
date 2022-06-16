import {
	ApiExecutionMetadata,
	ApiResponseBase,
	ApiScore,
} from '../responses.js';

export interface ApiSelectOptions {
	/**
	 * The reference input to compute likelihood against.
	 */
	reference: string;

	/**
	 * The input(s) that are compared to the reference and ranked based on likelihood.
	 */
	candidates: string[];

	/**
	 * Expression used to link reference and candidates to create the prompt used
	 * to compute the likelihood. The prompt will have the structure `reference` + `conjunction`
	 * + `candidate`. Finding a good `conjunction` can greatly increase the performance of `select`.
	 *
	 * @default ""
	 */
	conjunction?: string;

	/**
	 * If `true`, the response will contain a `best` field with the selected choice.
	 *
	 * @default true
	 */
	concat_best?: boolean;
}

export interface ApiSelectRanking {
	/**
	 * A single entry from the candidates sent in the request.
	 */
	text: string;

	/**
	 * A `Score` structure.
	 */
	score: ApiScore;
}

export interface ApiSelectOutput {
	/**
	 * The `reference` sentence used to compute similarities.
	 */
	reference: string;

	/**
	 * One entry for each member of `candidates`.
	 */
	rankings: ApiSelectRanking[];

	/**
	 * Best choice selected among the `candidates` in terms of likelihood.
	 */
	best: string;

	/**
	 * An [Execution metadata](/api/specifications/responses/#execution-metadata) structure.
	 */
	execution_metadata: ApiExecutionMetadata;
}

export type ApiSelectResponse = ApiResponseBase<ApiSelectOutput>;
