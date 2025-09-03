import { createContext, useContext, useEffect, useState } from "react";


const TodoContext = createContext();

export const useTodo = ()=>{
    return useContext(TodoContext)
};

export function ThemeProvider({children}){
    const [allTodos,setAllTodos]=useState(()=>{
        const savedTodos = localStorage.getItem("todos");
        return  savedTodos?JSON.parse(savedTodos) : [];
    });
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(allTodos));
    },[allTodos])
    
    return(
        <TodoContext.Provider value={{allTodos,setAllTodos}}>{children}</TodoContext.Provider>
    )
}