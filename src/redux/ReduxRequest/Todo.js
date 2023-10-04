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
            state.todos.forEach((todo, i)=>{
                if (i === action.payload) {
                    todo.checked = !todo.checked                
                }
            })
        },
        deleteTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=> {return todo.title != action.payload})
        }, 
        editTodo: (state, action) => {
            const { index, values } = action.payload;
          
            const updatedTodos = state.todos.map((todo, i) =>
              i === index ? { ...todo, title: values } : todo
            );
          
            // Return a new state object
            return {
              ...state,
              todos: updatedTodos,
            };
            }
            }
})

export const {addtodo, updateChecked, deleteTodo, editTodo} = TodoSlice.actions;

export default TodoSlice.reducer;