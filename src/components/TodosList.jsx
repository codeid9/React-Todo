import React, { useState } from "react";
import Todo from "./Todo";

function TodosList() {
  const [todos, setTodos] = useState([
    { text: "first todo" },
    { text: "second todo" },
  ]);
  return (
    <div className="todo-list">
      {todos && todos.length > 0 ? (
        todos.map((data) => <Todo key={data.text} todo={data.text} />)
      ) : (
        <p>Todo Not Created Yet!</p>
      )}
    </div>
  );
}

export default TodosList;
