import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useGetTodosQuery } from "./services/api";

function App() {
  const { data: todos, isLoading, isFetching } = useGetTodosQuery();

  if (isLoading && isFetching) {
    return (
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Loading ...</h3>;
      </div>
    );
  }
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <h1>Todos</h1>
        <div className="badge">
          <h3>{todos.length}</h3>
        </div>
      </div>
      <TodoForm />
      <TodoList todos={todos} isLoading={isLoading} isFetching={isFetching} />
    </div>
  );
}

export default App;
