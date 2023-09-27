import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './ReduxRequest/Todo'

export const store = configureStore({
    reducer:{
        todo: TodoReducer
    }
})