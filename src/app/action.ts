"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { employees } from "@/lib/db/schema";

export async function addEmployee(
  _prevState: { error: string | null } | null,
  formData: FormData,
): Promise<{ error: string | null }> {
  const name = String(formData.get("name") ?? "").trim();
  const salaryRaw = formData.get("salary");

  if (!name) {
    return { error: "Имя обязательно" };
  }

  const salary = Number(salaryRaw);
  if (!Number.isFinite(salary) || salary < 0) {
    return { error: "Зарплата должна быть положительным числом" };
  }

  await db.insert(employees).values({ name, salary });
  revalidatePath("/");

  return { error: null };
}

export async function removeEmployee(id: number) {
  await db.delete(employees).where(eq(employees.id, id));
  revalidatePath("/");
}

export async function toggleRise(id: number) {
  const [current] = await db
    .select({ rise: employees.rise })
    .from(employees)
    .where(eq(employees.id, id));

  if (!current) return;

  await db
    .update(employees)
    .set({ rise: !current.rise })
    .where(eq(employees.id, id));

  revalidatePath("/");
}

export async function toggleIncrease(id: number) {
  const [current] = await db
    .select({ increase: employees.increase })
    .from(employees)
    .where(eq(employees.id, id));

  if (!current) return;

  await db
    .update(employees)
    .set({ increase: !current.increase })
    .where(eq(employees.id, id));

  revalidatePath("/");
}
