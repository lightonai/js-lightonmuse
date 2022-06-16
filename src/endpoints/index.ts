import { Endpoints } from '../requests.js';
import { ApiAnalyseOptions, ApiAnalyseResponse } from './analyse.js';
import { ApiCompareOptions, ApiCompareResponse } from './compare.js';
import { ApiCreateOptions, ApiCreateResponse } from './create.js';
import { ApiEmbedOptions, ApiEmbedResponse } from './embed.js';
import { ApiSelectOptions, ApiSelectResponse } from './select.js';
import { ApiTokenizeOptions, ApiTokenizeResponse } from './tokenize.js';

// TODO: Api requests and responses can be arrays for batch processing

// TODO: document
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

export type ApiBatchRequestOptions<E extends Endpoints> =
	ApiRequestOptions<E>[];

// TODO: document
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

export type ApiBatchResponse<E extends Endpoints> = ApiResponse<E>[];

// Re-export api types
export * from './analyse.js';
export * from './create.js';
export * from './select.js';
export * from './compare.js';
export * from './embed.js';
export * from './tokenize.js';
