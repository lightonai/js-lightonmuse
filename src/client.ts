import fetch, { Response } from 'node-fetch';
import {
	ApiBatchRequestOptions,
	ApiRequestOptions,
	ApiResponse,
} from './endpoints/index.js';
import { ApiModels, Endpoints } from './requests.js';
import { isApiResponseBadRequest, isApiResponseError } from './responses.js';

export type MuseResponse<E extends Endpoints> =
	| { error: Error; response: null }
	| {
			error: null;
			response: ApiResponse<E>;
	  };

export class MuseRequest {
	constructor(private apiKey: string) {}

	public async query<
		E extends Endpoints,
		O extends ApiRequestOptions<E> | ApiBatchRequestOptions<E>
	>(model: ApiModels, endpoint: E, options: O): Promise<MuseResponse<E>> {
		const response = await this.raw(model, endpoint, options);
		const body = await response.json();

		if (response.status !== 200 && isApiResponseBadRequest(body))
			return { error: new Error(body.detail), response: null };

		if (isApiResponseError(body)) {
			return {
				error: new Error(`${body.request_id} - ${body.error_msg}`),
				response: null,
			};
		}

		return {
			response: body as ApiResponse<E>,
			error: null,
		};
	}

	public async raw<E extends Endpoints>(
		model: ApiModels,
		endpoint: E,
		options: ApiRequestOptions<E> | ApiBatchRequestOptions<E>
	): Promise<Response> {
		const url = `${MUSE_API_BASE_URL}${endpoint}`;

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
