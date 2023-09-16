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


//TODO esto ya esta tipado en teoria deberia poder exportar la interface de Article a donde uso el CartState
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

interface CartState {
    id: string | number;
    name: string
    image: string,
    info: string
}
//TODO el iniciaState => es un array de articles
const initialState: CartState[] = []

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartState>) => { },
        removeToCart: () => { }
    },
})

export const { } = cartSlice.actions
