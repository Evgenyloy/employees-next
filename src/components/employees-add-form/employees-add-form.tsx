"use client";

import { useActionState } from "react";
import { addEmployee } from "../../app/action";
import styles from "./employees-add-form.module.scss";

export default function EmployeesAddForm() {
  const [state, formAction, isPending] = useActionState(addEmployee, null);

  return (
    <div className={styles.wrapper}>
      <h3>Добавьте нового сотрудника</h3>
      <form action={formAction} className="d-flex gap-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Как его зовут?"
          required
        />
        <input
          type="number"
          name="salary"
          className="form-control"
          placeholder="З/П в $?"
          required
        />
        <button type="submit" className="btn btn-light" disabled={isPending}>
          {isPending ? "Добавляем…" : "Добавить"}
        </button>
      </form>
      {state?.error && <p className={styles.error}>{state.error}</p>}
    </div>
  );
}
