import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useTodo } from "../context/TodoContext";

function Todo({ todo }) {
  const {allTodos,setAllTodos} = useTodo();
  const {id,text,completed} = todo;
  const [isCompleted, setIsCompleted] = useState(completed);

  function handleDelete() {
    const filteredTodos = allTodos.filter(item=>item.id!==(id))
    setAllTodos([...filteredTodos]);
  }

  useEffect(()=>{
    allTodos.filter((item)=>{
      console.log(item);
      if(item.id==id){
        item.completed=isCompleted;
      }
    })
    setAllTodos([...allTodos])
  },[isCompleted])

  function handleCompletedTodo() {
    setIsCompleted(!isCompleted)
  }

  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompletedTodo}
        />
        <p>{text}</p>
      </div>
      <div>
        <button>
          <BiEdit />
        </button>
        <button onClick={handleDelete}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Todo;
