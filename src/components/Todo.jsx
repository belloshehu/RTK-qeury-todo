import React from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../services/api";
import { FaTrash } from "react-icons/fa";

export const Todo = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const { title, completed, id } = todo;

  return (
    <div className="todo">
      <input
        type="checkbox"
        id="title"
        checked={completed}
        onChange={() => updateTodo({ ...todo, completed: !completed })}
      />
      <label htmlFor="title">{title}</label>
      <FaTrash
        style={{ color: "red", marginLeft: "auto" }}
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};
