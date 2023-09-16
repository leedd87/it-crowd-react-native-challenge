// import { createSlice } from '@reduxjs/toolkit'

// export const newsSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         news: [],
//         isLoading: false,
//     },
//     reducers: {
//         loadingNews: (state) => {
//             state.isLoading = true
//         },

//         setNews: (state, action) => {
//             state.isLoading = false
//             state.news = action.payload.news
//         }
//     },
// })

// // Action creators are generated for each case reducer function
// export const { loadingNews, setNews } = newsSlice.actions


import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


//TODO este es el tipado del Article pero tengo que crear otra interface para que Add y Remove (tengo dudas de como acceder al source)
// export interface Article {
//     source: Source
//     author: null | string;
//     title: string;
//     description: null | string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     content: null | string;
// }

// export interface Source {
//     id: null | string;
//     name: string;
// }

interface CartAddState {
    id: string | number;
    name: string
    image: string,
    info: string
}

interface CartRemoveState {
    id: string | number
}
//TODO el iniciaState => es un array de articles
const initialState: CartAddState[] = []

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartAddState>) => {
            const { id } = action.payload
            if (
                state.length === 0 ||
                state.filter(item => item.id === id).length === 0) {
                state.push(action.payload)
            }
        },
        removeToCart: (state, action: PayloadAction<CartRemoveState>) => { },
    },
})

export const { addToCart, removeToCart } = cartSlice.actions
