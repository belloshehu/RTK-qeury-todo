import React from "react";

export const TodoForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <input type="text" id="title" placeholder="New todo" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
