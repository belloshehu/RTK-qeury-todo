import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Todos</h1>
      </div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
