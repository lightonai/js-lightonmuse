import fetch, { Response } from 'node-fetch';
import { ApiRequestOptions, ApiResponse } from './endpoints';
import { ApiModels, Endpoints } from './requests';

export class MuseRequest {
	// IDEA: model param in post function func
	constructor(private apiKey: string, checkApiKey = false) {
		if (!checkApiKey) {
			console.warn(
				`
Initializing MuseRequest without checking API key is not recommended.
You might want to use use the new() function instead :
const client = await MuseRequest.new(process.env.MUSE_API_KEY);
`
			);
		}
	}

	public static async new(apiKey: string): Promise<MuseRequest | null> {
		let requester = new MuseRequest(apiKey, true);

		let response = await requester.raw(
			ApiModels.OrionFr,
			Endpoints.Tokenize,
			{
				text: 'Hello world!',
			}
		);

		// Don't hand the requester back if the api key is invalid
		if (response.status === 403) {
			return null;
		}

		return requester;
	}

	public async post<E extends Endpoints>(
		model: ApiModels,
		endpoint: E,
		options: ApiRequestOptions<E>
	): Promise<{ error?: Error; response?: ApiResponse<E> }> {
		let response = await this.raw(model, endpoint, options);

		// TODO: handle more 4xx and 5xx errors
		if (response.status === 400)
			return { error: new Error('Invalid API key') };

		const body = await response.json();

		// TODO: make guard functions for each case
		// TODO: handle errors in the response
		// export interface ApiResponseError extends ApiResponseBase {
		// 	error_msg: string;
		// }

		return {
			response: body as ApiResponse<E>,
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
