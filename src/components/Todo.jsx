import React from "react";
import { useUpdateTodoMutation } from "../services/api";

export const Todo = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const { title, completed } = todo;
  return (
    <div className="todo">
      <input
        type="checkbox"
        id="title"
        checked={completed}
        onChange={() => updateTodo({ ...todo, completed: !completed })}
      />
      <label htmlFor="title">{title}</label>
    </div>
  );
};
