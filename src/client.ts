import {
	ApiBatchRequestOptions,
	ApiRequestOptions,
	ApiResponse,
} from './endpoints/index.js';
import { ApiModel, Endpoint } from './requests.js';
import fetch, { Response } from 'node-fetch';
import { isApiResponseBadRequest, isApiResponseError } from './responses.js';

/**
 * The response of the [`MuseRequest`] class.
 */
export type MuseResponse<E extends Endpoint> =
	| { error: Error; response: null }
	| {
			error: null;
			response: ApiResponse<E>;
	  };

/**
 * The [`MuseRequest`] Error class.
 */
class MuseApiError extends Error {
	constructor(message: string, public requestId?: string) {
		super(message);

		this.name = 'MuseApiError';
	}

	toString() {
		if (this.requestId) {
			return `MuseApiError: ${this.message} (requestId: ${this.requestId})`;
		}

		return `MuseApiError: ${this.message}`;
	}
}

/**
 * An optional NodeJS client for making requests to the API.
 *
 * You must provide an API key.
 *
 * @example
 * ```ts
 * const client = new MuseRequest('API_KEY');
 * // or
 * const client = new MuseRequest('API_KEY', 'Your own API base URL');
 * ```
 */
export class MuseRequest {
	constructor(private apiKey: string, private apiUrl = MUSE_API_BASE_URL) {}

	public async query<
		E extends Endpoint,
		O extends ApiRequestOptions<E> | ApiBatchRequestOptions<E>
	>(model: ApiModel, endpoint: E, options: O): Promise<MuseResponse<E>> {
		const response = await this.raw(model, endpoint, options);
		const body = await response.json();

		if (response.status !== 200 && isApiResponseBadRequest(body)) {
			return { error: new MuseApiError(body.detail), response: null };
		}

		if (isApiResponseError(body)) {
			return {
				error: new MuseApiError(body.error_msg, body.request_id),
				response: null,
			};
		}

		return {
			response: body as ApiResponse<E>,
			error: null,
		};
	}

	public async raw<E extends Endpoint>(
		model: ApiModel,
		endpoint: E,
		options: ApiRequestOptions<E> | ApiBatchRequestOptions<E>
	): Promise<Response> {
		const url = `${this.apiUrl}${endpoint}`;

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-Api-Key': this.apiKey,
				'X-Model': model,
			},
			body: JSON.stringify(options),
		});

		return response;
	}
}

export const MUSE_API_BASE_URL = 'https://api.lighton.ai/muse/v1/';
