import React, { useState } from "react";
import { useGetTodosQuery } from "../services/api";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  //   const [todos, setTodos] = useState([]);

  return (
    <div>
      {todos?.map((todo) => (
        <Todo title={todo.title} key={todo.id} />
      ))}
    </div>
  );
};
