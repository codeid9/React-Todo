import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { useTodo } from "../context/TodoContext";

function TodosList() {
  const {allTodos} = useTodo();
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setTodos([...allTodos]);
  },[allTodos])

  return (
    <div className="todo-list">
      {todos && todos.length > 0 ? (
        todos.map((data) => <Todo key={data.id} todo={data} />)
      ) : (
        <p>Todo Not Created Yet!</p>
      )}
    </div>
  );
}

export default TodosList;
