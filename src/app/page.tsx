import AppFilter from "@/components/app-filter/app-filter";
import AppInfo from "@/components/app-info/app-info";
import EmployeesAddForm from "@/components/employees-add-form/employees-add-form";
import EmployeesList from "@/components/employees-list/employees-list";
import SearchPanel from "@/components/search-panel/search-panel";
import { getEmployees, type Filter } from "@/lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; query?: string }>;
}) {
  const { filter = "all", query = "" } = await searchParams;

  const safeFilter: Filter =
    filter === "rise" || filter === "salary" ? filter : "all";

  const employees = await getEmployees({ filter: safeFilter, query });

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel d-flex align-items-center">
        <SearchPanel query={query} />
        <AppFilter filter={safeFilter} />
      </div>
      <EmployeesList employees={employees} />
      <EmployeesAddForm />
    </div>
  );
}
