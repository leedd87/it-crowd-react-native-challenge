import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from '../redux/newsSlices'


export const store = configureStore({
    reducer: {
        //TESTING cambiar nombre
        newsReducer: newsSlice.reducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch