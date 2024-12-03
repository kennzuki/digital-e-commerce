import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  image: varchar(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const productsTable = pgTable('products', {
  id: integer().primaryKey(),
  title: varchar().notNull(),
  price: integer().notNull(),
  description: varchar().notNull(),
  about: varchar(),
  category: varchar().notNull(),
  imageUrl: varchar().notNull(),
  fileUrl: varchar().notNull(),
  message: varchar(),
  createdBy: varchar('createdBy').notNull().references(()=>usersTable.email),
});
