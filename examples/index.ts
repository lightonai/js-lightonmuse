import { ApiModels, Endpoints, MuseRequest } from '..';

const MUSE_API_KEY = process.env.MUSE_API_KEY;

if (!MUSE_API_KEY) {
	throw new Error('MUSE_API_KEY is not set');
}

const client = new MuseRequest(MUSE_API_KEY);

let { response, error } = await client.query(
	ApiModels.AurigaDe,
	Endpoints.Create,
	{
		text: 'Hello world!',
	}
);

if (error) throw error;

console.log(response?.request_id);
