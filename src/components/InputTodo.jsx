
import { useState } from "react";
import { useTodo } from "../context/TodoContext.jsx";


function InputTodo() {
  const {allTodos,setAllTodos} = useTodo();
  const [todoText,setTodoText]=useState("");
  function addTodo(e){
    if(e.key==='Enter' && todoText!==""){
      const id = allTodos.length>0 ?(allTodos.length+1):1;
      const newTodo = {id:id,text:todoText,completed:false};
      setAllTodos([...allTodos,newTodo])
      setTodoText("");
    }
  }
  return (
      <input type="text" placeholder="Enter Todo..." value={todoText} onChange={(e)=>setTodoText(e.target.value)} className="input-todo" onKeyDown={addTodo}/>
  );
}

export default InputTodo;
