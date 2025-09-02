import { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo.jsx";
import Search from "./components/Search.jsx";
import TodosList from "./components/TodosList.jsx";
import { BiX, BiSearch } from "react-icons/bi";
import ButtonSet from "./components/ButtonSet.jsx";

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="app">
      
      <header>
        <div className="wrapper">
          {isSearchActive ? <Search /> : <InputTodo />}

          <div
            className={isSearchActive?"icon active":"icon"}
            onClick={() => setIsSearchActive((prev) => !prev)}
          >
            {isSearchActive ? <BiX /> : <BiSearch />}
          </div>
        </div>
      </header>

      <ButtonSet/>

      <TodosList />
    </div>
  );
}

export default App;
