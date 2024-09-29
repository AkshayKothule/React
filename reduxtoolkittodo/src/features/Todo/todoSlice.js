
import {createSlice , nanoid} from '@reduxjs/toolkit'

// nanoid :- create unqiue Id

const initialState={
    todos:[{
        id :1,
        text :"hello word"

    }]
    
}

export const todoSlice=createSlice({
    name :'todo',
    initialState,
    reducers:{
        addTodo:(state , action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
         state.todos.push(todo);


        },
        removeTodo:(state , action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)

        },
    }
    // reducers : inside the reducers are function and propertise
})

export const {addTodo , removeTodo}=todoSlice.actions

export default todoSlice.reducer