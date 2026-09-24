import clsx from "clsx";
import { removeEmployee, toggleIncrease, toggleRise } from "@/app/action";
import type { Employee } from "@/lib/types";
import styles from "./employees-list-item.module.scss";

export default function EmployeesListItem({
  employee,
}: {
  employee: Employee;
}) {
  return (
    <li
      className={clsx(
        "list-group-item d-flex justify-content-between align-items-center",
        styles.item,
        employee.rise && styles.rise,
        employee.increase && styles.bonus,
      )}
    >
      <form action={toggleRise.bind(null, employee.id)}>
        <button type="submit" className={styles.nameButton}>
          {employee.name}
        </button>
      </form>

      <input
        type="text"
        className="list-group-item-input"
        defaultValue={employee.salary}
      />

      <div className={styles.buttonsGroup}>
        <form action={toggleIncrease.bind(null, employee.id)}>
          <button
            type="submit"
            className={clsx("btn btn-sm", styles.btnCookie)}
          >
            <i className="fas fa-cookie" />
          </button>
        </form>

        <form action={removeEmployee.bind(null, employee.id)}>
          <button type="submit" className={clsx("btn btn-sm", styles.btnTrash)}>
            <i className="fas fa-trash" />
          </button>
        </form>

        <i className={clsx("fas fa-star", styles.star)} />
      </div>
    </li>
  );
}
