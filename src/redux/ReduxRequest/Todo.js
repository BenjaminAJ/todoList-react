import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{title:'lets go'}]
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo: (state, action)=>{
            state.todos.push({title:action.payload});
        }
    }
})

export const {addtodo} = TodoSlice.actions;

export default TodoSlice.reducer;