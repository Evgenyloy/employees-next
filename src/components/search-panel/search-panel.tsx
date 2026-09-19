export default function SearchPanel({ query }: { query: string }) {
  return (
    <input type="text" placeholder="Найти сотрудника" defaultValue={query} />
  );
}
