import { eq } from "drizzle-orm";

import { db } from "@/db";
import { customers, tickets } from "@/db/schema";

export async function getOpenTickets() {
  const results = await db
    .select({
      ticketDate: tickets.createdAt,
      title: tickets.title,
      firstname: customers.firstName,
      lastname: customers.lastName,
      email: customers.email,
      tech: tickets.tech,
    })
    .from(tickets)
    .leftJoin(customers, eq(tickets.customerId, customers.id))
    .where(eq(tickets.completed, false));

  return results;
}
