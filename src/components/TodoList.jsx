import React, { useState } from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos }) => {
  //   const [todos, setTodos] = useState([]);

  return (
    <div className="todo-list">
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
