import { ApiMode, ApiSkill } from '../requests.js';
import {
	ApiExecutionMetadata,
	ApiResponseBase,
	ApiScore,
} from '../responses.js';

export interface ApiCreateParams {
	/**
	 * Number of tokens to generate. This can be overridden by a list of stop_words,
	 *
	 * Defaults toll cause generation to halt when a word in such list is encountered.
	 *
	 * Defaults to `20`.
	 */
	n_tokens?: number;

	/**
	 * Number of different completion proposals to return for each prompt.
	 *
	 * Defaults to `1`.
	 */
	n_completions?: number;

	/**
	 * Among n_completions, only return the best_of ones.
	 * Completions are selected according to how likely they are,
	 * summing the log-likelihood over all tokens generated.
	 *
	 * ⚠️ Must be smaller than n_completions.
	 *
	 * Defaults to `undefined`.
	 */
	best_of?: number;

	/**
	 * How the model will decide which token to select at each step.
	 *
	 * Defaults to [`ApiMode.Nucleus`].
	 */
	mode?: ApiMode;

	/**
	 * How risky will the model be in its choice of tokens. A temperature of 0 corresponds to greedy sampling;
	 * we recommend a value around 1 for most creative applications, and closer to 0 when a ground truth exists.
	 *
	 * ⚠️ Only in `TopK`/`Nucleus` mode.
	 *
	 * Defaults to `1`.
	 */
	temperature?: number;

	/**
	 * Total probability mass of the most likely tokens considered when sampling in nucleus mode.
	 *
	 * ⚠️ Only in `Nucleus` mode.
	 *
	 * Defaults to `0.9`.
	 */
	p?: number;

	/**
	 * Number of most likely tokens considered when sampling in top-k mode.
	 *
	 * ⚠️ Only in `TopK` mode.
	 *
	 * Defaults to `5`.
	 */
	k?: number;

	/**
	 * Bias the provided words to appear more or less often in the generated text.
	 * Values should be comprised between -100 and +100, with negative values making words less likely to occur.
	 * Extreme values such as -100 will completely forbid a word, while values between 1-5 will make
	 * the word more likely to appear. We recommend playing around to find a good fit for your use case.
	 *
	 * Defaults to `undefined`.
	 */
	biases?: Record<string, number>;

	/**
	 * How strongly should tokens be prevented from appearing again. This is a one-off penalty:
	 * tokens will be penalized after their first appearance, but not more if they appear repetitively
	 * -- use `frequency_penalty` if that's what you want instead. Use values between 0 and 1.
	 * Values closer to 1 encourage variation of the topics generated.
	 *
	 * Defaults to `0`.
	 */
	presence_penalty?: number;

	/**
	 * How strongly should tokens be prevented from appearing again if they have
	 * appeared repetitively. Contrary to `presence_penalty`, this penalty scales with
	 * how often the token already occurs. Use values between 0 and 1. Values closer
	 * to 1 discourage repetition, especially useful in combination with `biases`.
	 *
	 * Defaults to `0`.
	 */
	frequency_penalty?: number;

	/**
	 * Encountering any of these words will halt generation immediately.
	 *
	 * Defaults to `undefined`.
	 */
	stop_words?: string[];

	/**
	 * The original prompt will be concatenated with the generated text in the returned response.
	 *
	 * Defaults to `false`.
	 */
	concat_prompt?: boolean;

	/**
	 * Returns the [log-probabilities](https://muse-docs.lighton.ai/home/concepts#likelihood) of the generated tokens.
	 *
	 * Defaults to `false`.
	 */
	return_logprobs?: boolean;

	/**
	 * Make sampling deterministic by setting a seed used for random number generation. Useful for strictly reproducing Create calls.
	 *
	 * Defaults to `undefined`.
	 */
	seed?: number;

	/**
	 * Specify a 🤹 Skill to use to perform a specific task or to tailor the generated text.
	 *
	 * Defaults to `undefined`.
	 */
	skill?: ApiSkill;
}

export interface ApiCreateOptions {
	/**
	 * The input(s) that will be used by the model for generation, also known as the prompt.
	 * They can be provided either as a single string or as an array of strings for [batch processing](https://muse-docs.lighton.ai/api/specifications/requests#batching).
	 */
	text: string | string[];

	/**
	 * A set of parameters to control the model output.
	 */
	params?: ApiCreateParams;
}

export interface ApiCreateCompletion {
	/**
	 * Text generated by the model. May be concatenated with the input_text if `concat_prompt`is set to true.
	 */
	output_text: string;

	/**
	 * A `Score` structure.
	 */
	score: ApiScore;

	/**
	 * An [Execution metadata](/api/specifications/responses/#execution-metadata) structure.
	 */
	execution_metadata: ApiExecutionMetadata;
}

export interface ApiCreateOutput {
	/**
	 * The original prompt that was used to generate the text.
	 * Can be concatenated with the generated text if the `concat_prompt` is set to true in the request.
	 */
	input_text: string;

	/**
	 * The generated completions.
	 * One entry for each `n_completions` requested.
	 */
	completions: ApiCreateCompletion[];
}

export type ApiCreateResponse = ApiResponseBase<ApiCreateOutput>;
