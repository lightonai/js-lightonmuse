import fetch, { Response } from 'node-fetch';
import { ApiRequestOptions, ApiResponse } from './endpoints';
import { ApiModels, Endpoints } from './requests';
import { isApiResponseBadRequest, isApiResponseError } from './responses';

export class MuseRequest {
	constructor(private apiKey: string) {}

	public async query<E extends Endpoints>(
		model: ApiModels,
		endpoint: E,
		options: ApiRequestOptions<E>
	): Promise<
		| { error: Error; response: null }
		| { error: null; response: ApiResponse<E> }
	> {
		const response = await this.raw(model, endpoint, options);
		const body = await response.json();

		if (response.status !== 200 && isApiResponseBadRequest(body))
			return { error: new Error(body.details), response: null };

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
		options: ApiRequestOptions<E>
	): Promise<Response> {
		const url = `https://api.lighton.ai/muse/v1/${endpoint}`;

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
