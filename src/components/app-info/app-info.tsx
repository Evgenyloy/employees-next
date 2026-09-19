import { getStats } from "@/lib/data";

export default async function AppInfo() {
  const stats = await getStats();

  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {stats.total}</h2>
      <h2>Премию получат: {stats.withBonus}</h2>
    </div>
  );
}
