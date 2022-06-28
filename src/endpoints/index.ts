import { Endpoints } from '../requests.js';
import { ApiAnalyseOptions, ApiAnalyseResponse } from './analyse.js';
import { ApiCompareOptions, ApiCompareResponse } from './compare.js';
import { ApiCreateOptions, ApiCreateResponse } from './create.js';
import { ApiEmbedOptions, ApiEmbedResponse } from './embed.js';
import { ApiSelectOptions, ApiSelectResponse } from './select.js';
import { ApiTokenizeOptions, ApiTokenizeResponse } from './tokenize.js';

/**
 * The options for a specific endpoint.
 */
export type ApiRequestOptions<E extends Endpoints> = E extends Endpoints.Create
	? ApiCreateOptions
	: E extends Endpoints.Analyse
	? ApiAnalyseOptions
	: E extends Endpoints.Embed
	? ApiEmbedOptions
	: E extends Endpoints.Select
	? ApiSelectOptions
	: E extends Endpoints.Compare
	? ApiCompareOptions
	: E extends Endpoints.Tokenize
	? ApiTokenizeOptions
	: never;

/**
 * The options for a batch request
 */
export type ApiBatchRequestOptions<E extends Endpoints> =
	ApiRequestOptions<E>[];

/**
 * The response of the API for a specific endpoint.
 */
export type ApiResponse<E extends Endpoints> = E extends Endpoints.Create
	? ApiCreateResponse
	: E extends Endpoints.Analyse
	? ApiAnalyseResponse
	: E extends Endpoints.Embed
	? ApiEmbedResponse
	: E extends Endpoints.Select
	? ApiSelectResponse
	: E extends Endpoints.Compare
	? ApiCompareResponse
	: E extends Endpoints.Tokenize
	? ApiTokenizeResponse
	: never;

// Re-export api types
export * from './analyse.js';
export * from './create.js';
export * from './select.js';
export * from './compare.js';
export * from './embed.js';
export * from './tokenize.js';
