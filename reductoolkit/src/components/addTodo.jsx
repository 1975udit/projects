import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todoSlice'

export default function AddTodo(){
      
    // if you went to add somthing to the store than use dispatch
    const dispatch = useDispatch()  

    const [input , setInput] = useState("")

    // whenever this form submited we have to send data to the store
    const addDataHandler = (e) => {
        // stop the form default action
        e.preventDefault()

        // dispatch add values to a store using a reducer thats why we export the reducer functionalities individually also
        dispatch(addTodo(input))   // this fuction requires to things in defination state(it haas alrady) and payload
        
        // in last we can clean the input better practice
        setInput("")
    }

       return(
        <form onSubmit={addDataHandler}>
            <input className="bg-gray-500 m-7 mr-0 outline-none rounded-3xl rounded-r-none p-4 text-white" type="text" placeholder="Add msg here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 p-4 rounded-3xl rounded-l-none"> Add Todo </button>
        </form>
       )
}