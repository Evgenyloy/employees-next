import type { Filter } from "@/lib/data";

export default function AppFilter({ filter }: { filter: Filter }) {
  return (
    <div className="btn-group">
      <button type="button">
        Все сотрудники (активен: {String(filter === "all")})
      </button>
      <button type="button">На повышение ({String(filter === "rise")})</button>
      <button type="button">
        З/П больше 500$ ({String(filter === "salary")})
      </button>
    </div>
  );
}
