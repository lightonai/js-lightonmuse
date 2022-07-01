/**
 * Every available endpoint of the API.
 */
export enum Endpoints {
	Create = 'create',
	Analyse = 'analyse',
	Embed = 'embed',
	Select = 'select',
	Compare = 'compare',
	Tokenize = 'tokenize',
}

/**
 * How the model will decide which token to select at each step.
 */
export enum ApiModes {
	/**
	 * `greedy`: the model will always select the most likely token. This generation mode
	 * is deterministic and only suited for applications in which there is a ground truth the
	 * model is expected to return (e.g. question answering).
	 */
	Greedy = 'greedy',

	/**
	 * `topk`: the model will only consider the k most likely tokens.
	 */
	TopK = 'topk',

	/**
	 * `nucleus`: the model will only consider the most likely tokens with total
	 * probability mass p. We recommend this setting for most applications.
	 */
	Nucleus = 'nucleus',

	/**
	 * `typical`: the model will randomly select a token from the k most likely tokens.
	 */
	Typical = 'typical',
}

export enum ApiModels {
	OrionFr = 'orion-fr',
	OrionFrV2 = 'orion-fr-v2',
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
