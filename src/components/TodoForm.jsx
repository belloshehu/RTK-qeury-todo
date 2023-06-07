import React, { useState } from "react";
import { useAddTodoMutation } from "../services/api";

export const TodoForm = () => {
  const [addTodo] = useAddTodoMutation();
  const [todoTitle, setTodoTitle] = useState("");
  const [isError, setIsError] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(true);
    if (todoTitle !== "" && todoTitle.length > 5) {
      addTodo({
        id: new Date().getMilliseconds().toString(),
        title: todoTitle,
        completed: false,
      });
      setTodoTitle("");
      setError("");
      setIsError(false);
      return;
    }
    setIsError(true);
    setError("Title must me atleast 6 characters");
  };
  const handleFocus = (e) => {
    setIsError(!todoTitle.length > 5);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="New todo"
            onBlur={handleFocus}
          />
          <input type="submit" value="Submit" />
        </div>
        {isError && <small className="error">{error}</small>}
      </form>
    </div>
  );
};
