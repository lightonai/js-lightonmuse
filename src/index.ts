export * from './responses.js';
export * from './requests.js';
export * from './endpoints/index.js';

import { ApiRequest, Endpoints } from './requests.js';
import { ApiResponse } from './responses.js';
import fetch from 'node-fetch';

export enum ApiModels {
	OrionFr = 'orion-fr',
	LyraFr = 'lyra-fr',
	OrionEn = 'orion-en',
	LyraEn = 'lyra-en',
	AurigaDe = 'auriga-de',
	AurigaEs = 'auriga-es',
	AurigaIt = 'auriga-it',
}

export enum ApiSkills {
	OrionFrSummarisation = 'orion-fr@summarisation',
	LyraEnMultitask = 'lyra-en@multitask',
	AurigaDeZusammenfassung = 'auriga-de@zusammenfassung',
	AurigaEsResumen = 'auriga-es@resumen',
}

export class Request {
	constructor(private apiKey: string) {
		// TODO: check for api key errors
		this.post(Endpoints.Tokenize, {
			text: 'Hello world!',
		});
	}

	// TODO: overload function type to handle every endpoint
	public async post(
		endpoint: Endpoints,
		options: ApiRequest
	): Promise<ApiResponse> {
		const url = `https://api.lighton.ai/muse/v1/${endpoint}`;

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-Api-Key': this.apiKey,
				'X-Model': 'orion-fr',
			},
			body: JSON.stringify(options),
		});

		// TODO: handle 400 and 500 errors

		// TODO: return something like { error?: string, response?: ApiResponse }
		return (await response.json()) as ApiResponse;
	}
}
