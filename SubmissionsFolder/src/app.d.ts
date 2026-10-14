import type { DrizzleClient } from '#lib/server/db/index.ts';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}

		interface Locals {
			db: DrizzleClient;
		}

		// interface Error {}
		// interface PageData {}
		// interface PageState {}
	}
}

export {};
