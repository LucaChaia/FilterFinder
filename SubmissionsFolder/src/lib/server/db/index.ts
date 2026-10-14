import { drizzle as drizzleD1 } from 'drizzle-orm/d1';
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema.ts';

let localDb: BetterSQLite3Database<typeof schema> | undefined;

// better-sqlite3 doesn't run on Workers, so only load it in dev
export async function getDb(d1?: D1Database, databaseUrl?: string) {
	if (import.meta.env.DEV && databaseUrl) {
		if (!localDb) {
			const { drizzle } = await import('drizzle-orm/better-sqlite3');
			const { default: Database } = await import('better-sqlite3');
			localDb = drizzle(new Database(databaseUrl), { schema });
		}
		return localDb;
	}

	if (d1) return drizzleD1(d1, { schema });

	throw new Error('No database config found');
}

export type DrizzleClient = Awaited<ReturnType<typeof getDb>>;
