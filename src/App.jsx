import { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo.jsx";
import TodosList from "./components/TodosList.jsx";
import ButtonSet from "./components/ButtonSet.jsx";
import { useTodo } from "./context/TodoContext.jsx";
import { IoAddSharp } from "react-icons/io5";

function App() {
  const [active, setActive] = useState("All");
  const { allTodos, setAllTodos } = useTodo();
  const [todoText, setTodoText] = useState("");
  function addTodo(e) {
    if ((e.key === "Enter" || e.type == "click") && todoText !== "") {
      const newTodo = { id: Date.now(), text: todoText, completed: false };
      setAllTodos([...allTodos, newTodo]);
      setTodoText("");
    }
  }
  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <InputTodo props={{ setTodoText, todoText, addTodo }} />
          <div className="icon" onClick={addTodo}>
            <IoAddSharp />
          </div>
        </div>
      </header>

      <ButtonSet type={{ active, setActive }} />

      <TodosList type={{ active }} />
    </div>
  );
}

export default App;
