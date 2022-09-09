import {createSlice} from "@reduxjs/toolkit";
import {getFetcher} from "../api";

const initialState = {
    news: {}
}

const newSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        getNews(state, action) {
            state.news = getFetcher('news/category/football/1/')
        }
    }
})

export default newSlice.reducer
export const {getNews} = newSlice.actions