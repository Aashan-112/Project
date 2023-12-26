
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./Reducers/index";

const Store = configureStore({
    reducer: rootReducer, 
    devtools: process.env.NODE_ENV !== 'production'
})

export default Store 