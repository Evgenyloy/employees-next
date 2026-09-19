import { getEmployees, getStats } from "@/lib/data";

export default async function Home() {
  const employees = await getEmployees({});
  const stats = await getStats();

  return <pre>{JSON.stringify({ employees, stats }, null, 2)}</pre>;
}
