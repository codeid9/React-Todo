import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useTodo } from "../context/TodoContext";

function Todo({ todo }) {
  const {allTodos,setAllTodos} = useTodo();
  const {id,text,completed} = todo;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing,setIsEditing] = useState(false);
  const [todoText,setTodoText]=useState(text)
  function handleDelete() {
    const filteredTodos = allTodos.filter(item=>item.id!==(id))
    setAllTodos([...filteredTodos]);
  }

  useEffect(()=>{
    allTodos.filter((item)=>{
      if(item.id==id){
        item.completed=isCompleted;
        item.text=todoText;
      }
    })
    setAllTodos([...allTodos])
  },[isCompleted,isEditing])

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
        {
          isEditing?<input className="edit-input" type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)} autoFocus onKeyDown={(e)=>{if(e.key=="Enter"){setIsEditing(false)}}} onBlur={()=>setIsEditing(false)} />:<p>{text}</p>
        }
        
      </div>
      <div>
        <button style={isEditing ? {transform:"scale(0.8)",border:"1px solid black"} : {transform:"scale(1)",border:"none"}} onClick={()=>setIsEditing(!isEditing)} >
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
