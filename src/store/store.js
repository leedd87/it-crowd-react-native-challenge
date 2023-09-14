import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from './newsSlices/newsSlice'

export const store = configureStore({
    reducer: {
        news: newsSlice.reducer
    },
})

