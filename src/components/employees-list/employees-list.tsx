import type { Employee } from "@/lib/types";
import EmployeesListItem from "../employees-list-item/employees-list-item";

export default function EmployeesList({
  employees,
}: {
  employees: Employee[];
}) {
  return (
    <ul className="app-list list-group">
      {employees.map((employee) => (
        <EmployeesListItem key={employee.id} employee={employee} />
      ))}
    </ul>
  );
}
