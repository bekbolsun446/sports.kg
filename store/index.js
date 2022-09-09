import {combineReducers, configureStore} from "@reduxjs/toolkit";
import newSlice from "./news/newSlice";

const combinedReducers = combineReducers({
    news: newSlice
});

export const store = configureStore({
    reducer: combinedReducers
})