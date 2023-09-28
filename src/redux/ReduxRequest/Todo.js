import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo: (state, action)=>{
            state.todos.push({title:action.payload, checked:false});
        },
        updateChecked:(state,action) =>{
            state.todos.forEach((todo)=>{
                if (todo.title === action.payload) {
                    todo.checked = !todo.checked                
                }
            })
        },
        deleteTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=> {return todo.title != action.payload})
        }
    }
})

export const {addtodo, updateChecked, deleteTodo} = TodoSlice.actions;

export default TodoSlice.reducer;