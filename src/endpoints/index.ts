import { Endpoint } from '../requests.js';
import { ApiAnalyseOptions, ApiAnalyseResponse } from './analyse.js';
import { ApiCompareOptions, ApiCompareResponse } from './compare.js';
import { ApiCreateOptions, ApiCreateResponse } from './create.js';
import { ApiEmbedOptions, ApiEmbedResponse } from './embed.js';
import { ApiSelectOptions, ApiSelectResponse } from './select.js';
import { ApiTokenizeOptions, ApiTokenizeResponse } from './tokenize.js';

/**
 * The options for a specific endpoint.
 */
export type ApiRequestOptions<E extends Endpoint> = E extends Endpoint.Create
	? ApiCreateOptions
	: E extends Endpoint.Analyse
	? ApiAnalyseOptions
	: E extends Endpoint.Embed
	? ApiEmbedOptions
	: E extends Endpoint.Select
	? ApiSelectOptions
	: E extends Endpoint.Compare
	? ApiCompareOptions
	: E extends Endpoint.Tokenize
	? ApiTokenizeOptions
	: never;

/**
 * The options for a batch request
 */
export type ApiBatchRequestOptions<E extends Endpoint> = ApiRequestOptions<E>[];

/**
 * The response of the API for a specific endpoint.
 */
export type ApiResponse<E extends Endpoint> = E extends Endpoint.Create
	? ApiCreateResponse
	: E extends Endpoint.Analyse
	? ApiAnalyseResponse
	: E extends Endpoint.Embed
	? ApiEmbedResponse
	: E extends Endpoint.Select
	? ApiSelectResponse
	: E extends Endpoint.Compare
	? ApiCompareResponse
	: E extends Endpoint.Tokenize
	? ApiTokenizeResponse
	: never;

// Re-export api types
export * from './analyse.js';
export * from './create.js';
export * from './select.js';
export * from './compare.js';
export * from './embed.js';
export * from './tokenize.js';
