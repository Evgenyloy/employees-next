import "server-only";
import { and, eq, gt, ilike, type SQL } from "drizzle-orm";
import { db } from "./db";
import { employees } from "./db/schema";
import type { Employee } from "./types";

export type Filter = "all" | "rise" | "salary";

export async function getEmployees({
  filter = "all",
  query = "",
}: {
  filter?: Filter;
  query?: string;
}): Promise<Employee[]> {
  const conditions: SQL[] = [];

  if (filter === "rise") {
    conditions.push(eq(employees.rise, true));
  }

  if (filter === "salary") {
    conditions.push(gt(employees.salary, 500));
  }

  if (query.trim() !== "") {
    conditions.push(ilike(employees.name, `%${query}%`));
  }

  return db
    .select()
    .from(employees)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
}

export async function getStats() {
  const all = await db.select().from(employees);

  const total = all.length;
  const onRise = all.filter((e) => e.rise).length;
  const withBonus = all.filter((e) => e.increase).length;

  return { total, onRise, withBonus };
}
