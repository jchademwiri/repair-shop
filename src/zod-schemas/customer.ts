import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required"), // Validating minimum length
  lastName: (schema) => schema.min(1, "Last name is required"), // Validating minimum length
  address1: (schema) => schema.min(1, "Address is required"), // Validating minimum length
  city: (schema) => schema.min(1, "City is required"), // Validating minimum length
  state: (schema) => schema.length(2, "State must be exactly 2 characters"), // Validating fixed length
  email: (schema) => schema.email("Invalid email address"), // Email format validation
  zip: (schema) =>
    schema.regex(
      /^\d{4}$/,
      "Invalid Zip code. South African postal codes must be exactly 4 digits"
    ),  // Zip code format validation
  phone: (schema) =>
    schema.regex(
      /^0\d{2} \d{3} \d{4}$/,
      "Invalid phone number format. Use 0XX XXX XXXX"
    ), // Phone format validation
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
