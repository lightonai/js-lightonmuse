import { ApiSkills } from '.';

export enum Endpoints {
	Create = 'create',
	Analyse = 'analyse',
	Embed = 'embed',
	Select = 'select',
	Compare = 'compare',
	Tokenize = 'tokenize',
}

/**
 * How the model will decide which token to select at each step.
 */
export enum ApiMode {
	/**
	 * `greedy`: the model will always select the most likely token. This generation mode
	 * is deterministic and only suited for applications in which there is a ground truth the
	 * model is expected to return (e.g. question answering).
	 */
	Greedy = 'greedy',

	/**
	 * `nucleus`: the model will only consider the most likely tokens with total
	 * probability mass p. We recommend this setting for most applications.
	 */
	Nucleus = 'nucleus',

	/**
	 * `topk`: the model will only consider the k most likely tokens.
	 */
	TopK = 'topk',
}

/**
 *
 */
export interface ApiRequest {
	/**
	 * The input(s) that will be used by the model for generation, also known as the prompt.
	 * They can be provided either as a single string or as an array of strings for [batch processing](https://muse-docs.lighton.ai/api/specifications/requests#batching).
	 */
	text: string | string[];
}
