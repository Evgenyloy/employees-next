import {
  pgTable,
  serial,
  varchar,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  salary: integer("salary").notNull().default(0),
  rise: boolean("rise").notNull().default(false),
  increase: boolean("increase").notNull().default(false),
});
