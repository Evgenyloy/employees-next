import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { employees } from "./db/schema";

export type Employee = InferSelectModel<typeof employees>;
export type NewEmployee = InferInsertModel<typeof employees>;
