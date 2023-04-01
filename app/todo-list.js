import Todo from "./todo";
const getTodo = async () => {
  //   let todo = await fetch("https://jsonplaceholder.typicode.com/todos");
  let todo = await fetch("http://localhost:3001/api/todo/list");
  return todo.json();
};

export default async function ToDoList() {
  const { todos } = await getTodo();
  debugger;
  console.log(todos);
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map((t) => {
        return (
          <li key={t.id} style={{ padding: "5px 0" }}>
            <Todo todo={t} />
          </li>
        );
      })}
    </ul>
  );
}
