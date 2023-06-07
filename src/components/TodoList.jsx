import React, { useState } from "react";
import { useGetTodosQuery } from "../services/api";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  //   const [todos, setTodos] = useState([]);

  return (
    <div className="todo-list">
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
