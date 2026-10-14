import type { Handle } from '@sveltejs/kit/hooks';
import { env } from 'cloudflare:workers';
import { DATABASE_URL } from '$app/env/private';
import { getDb } from '#lib/server/db/index.ts';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.db = await getDb(env.filter_finder_db, DATABASE_URL);
	return resolve(event);
};
