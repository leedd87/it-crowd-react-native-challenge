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
import type { RootState } from '../../store/store'
import { Source } from '../../interfaces/newsInterface'


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

//TESTING a ver si traigo las cosas que pasa
interface ArticleAddState {
    //source: Source
    //TESTING estoy probando con id
    id: string | null;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: null | string;
}
//TESTING en el remove deberia usar url?
interface ArticleRemoveState {
    source: Source
}
//TODO el iniciaState => es un array de articles
const initialState: ArticleAddState[] = []

export const newsSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<ArticleAddState>) => {
            const { url, id } = action.payload
            if (
                state.length === 0 ||
                //state.filter(item => item.url === url).length === 0) {
                //TESTING CON ID tb lo desestructure del action.payload
                state.filter(item => item.id === id).length === 0) {
                state.push(action.payload)
            }
        },
        removeFromFavorites: (state, action: PayloadAction<ArticleRemoveState>) => { },
    },
})

export const { addToFavorites, removeFromFavorites } = newsSlice.actions
