import type { Employee } from "@/lib/types";

export default function EmployeesListItem({
  employee,
}: {
  employee: Employee;
}) {
  return (
    <li>
      {employee.name} — ${employee.salary} — rise: {String(employee.rise)} —
      increase: {String(employee.increase)}
    </li>
  );
}
