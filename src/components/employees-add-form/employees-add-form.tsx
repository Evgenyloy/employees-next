export default function EmployeesAddForm() {
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input type="text" placeholder="Как его зовут?" />
        <input type="number" placeholder="З/П в $?" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
