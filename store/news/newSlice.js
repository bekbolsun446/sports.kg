import {createSlice} from "@reduxjs/toolkit";
import {getFetcher} from "../api";
import axios from "axios";


const initialState = {
    news: getFetcher('news/category/football/1/').then(res => res.results)
}

const newSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        getNews(state) {
            const data = axios.get(`http://admin.sports.com.kg/api/news/category/football/1/`)
            state.news = data.data?.results;
        }
    }
})

export default newSlice.reducer
export const {getNews} = newSlice.actions