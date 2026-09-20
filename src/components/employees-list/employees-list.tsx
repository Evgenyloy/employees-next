import type { Employee } from "@/lib/types";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import styles from "./employees-list.module.scss";

export default function EmployeesList({
  employees,
}: {
  employees: Employee[];
}) {
  return (
    <ul className={`list-group ${styles.appList}`}>
      {employees.map((employee) => (
        <EmployeesListItem key={employee.id} employee={employee} />
      ))}
    </ul>
  );
}
