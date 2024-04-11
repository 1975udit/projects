import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todoSlice";
import AddTodo from "./addTodo";

export default function Todos(){
   
    // Now we have to bring todo array from the store 
    const todos = useSelector(state => state.todos)   // in this method we get the access of the state in a call back
    const dispatch = useDispatch()

    const updateHandler =() => {
    console.log("Please continue from here")
    }

    return(
       <>
       <div>Todos</div>
       <ul className="list-none">
       {todos.map((todo)=>(
           <li key={todo.id} className="flex m-3 p-2">
             <div className="bg-pink-300 m-4 p-4"> {todo.msg}</div>
             <button className="bg-green-500" onClick={updateHandler}>Update</button>
              <button className="bg-red-500" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
           </li>
       ))}
       </ul>
       </>
    )
}







{/* <span>
<div className="bg-gray-500 ">
<span className="bg-white">Data</span>
<button className=" bg-yellow-500  m-4 p-4">Update</button>
<button className="bg-red-500 m-4 p-4">Delete</button>
</div>
</span> */}