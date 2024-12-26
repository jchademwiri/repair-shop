import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

import { tickets } from '@/db/schema';

export const insertTicketSchema = createInsertSchema(tickets, {
  id: (schema) => schema.optional().or(z.literal('(New)')), // Allow "(New)" as a special value
  title: (schema) => schema.min(1, 'Title is required'), // Validate title length
  description: (schema) => schema.min(1, 'Description is required'), // Validate description length
  tech: (schema) => schema.email('Invalid email address'), // Validate email format
});

export const selectTicketSchema = createSelectSchema(tickets);

export type insertTicketSchemaType = typeof insertTicketSchema._type;

export type selectTicketSchemaType = typeof selectTicketSchema._type;
