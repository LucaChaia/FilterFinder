import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const filter = sqliteTable('filter', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	brand: text('brand').notNull(),
	certifier: text('certifier', { enum: ['NSF', 'IAPMO', 'WQA'] }).notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
});
