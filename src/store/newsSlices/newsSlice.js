import { createSlice } from '@reduxjs/toolkit'

export const newsSlice = createSlice({
    name: 'counter',
    initialState: {
        news: [],
        isLoading: false,
    },
    reducers: {
        loadingNews: (state) => {
            state.isLoading = true
        },

        setNews: (state, action) => {
            state.isLoading = false
            state.news = action.payload.news
        }
    },
})

// Action creators are generated for each case reducer function
export const { loadingNews, setNews } = newsSlice.actions