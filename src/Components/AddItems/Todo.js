import React, { useState } from "react";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newEnteredTitle, setnewEnteredTitle] = useState(todo.enteredTitle);

  const handleChange = (event) => {
    event.preventDefault();
    if (todo.complete === true) {
      setnewEnteredTitle(todo.enteredTitle);
    } else {
      todo.enteredTitle = "";
      setnewEnteredTitle(event.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todo.enteredTitle === "" ? newEnteredTitle : todo.enteredTitle}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          toggleComplete(todo);
        }}
      >
        complete
      </button>
      <button onClick={() => handleEdit(todo, setnewEnteredTitle)}>Edit</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}
