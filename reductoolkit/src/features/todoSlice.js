import {createSlice , nanoid } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name : 'todo' ,
    initialState : {
        todos :[{id:nanoid() , msg : "hello"}]
    },

    reducers:{
        addTodo : (state , action) => {
           const todo = {
                id : nanoid(),
                msg : action.payload
            }
            // now puch this new todo to the state or array
            state.todos.push(todo)
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) 
         } //,
        // updateTodo : (state,action) => {
        //     state.todos.map((todo) => {
        //         if(todo.id === action.id){
        //             todo.msg = "Job Done"
        //         }
        //     })
        // }
    }
})

// exporting individual functionality which we can use in components
export const {removeTodo,addTodo,updateTodo} = todoSlice.actions

// exporting reducers foe store
export default todoSlice.reducer

// after this setup now you have to select or dispatch data to the store
