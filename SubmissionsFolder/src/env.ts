import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DATABASE_URL: {
		description: 'Local SQLite file for dev. Unset in production (uses D1).',
		schema: (value) => value || undefined
	}
});
