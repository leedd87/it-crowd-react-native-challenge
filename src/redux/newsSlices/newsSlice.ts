import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Source } from '../../interfaces/newsInterface'


//TESTING a ver si traigo las cosas que pasa
interface ArticleAddState {
    //source: Source
    //TESTING estoy probando con id
    //id: string | null;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: null | string;
}

interface ArticleRemoveState {
    url: string;
}
//TODO el iniciaState => es un array de articles
const initialState: ArticleAddState[] = []

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<ArticleAddState>) => {
            const { url } = action.payload
            if (
                state.length === 0 ||
                state.filter(item => item.url === url).length === 0) {
                state.push(action.payload)
            }
        },
        removeFromFavorites: (state, action: PayloadAction<ArticleRemoveState>) => {
            const { url } = action.payload
            if (state.some((item) => item.url === url)) {
                return state = state.filter((item) => item.url !== url)
            }
        },
    },
})

export const { addToFavorites, removeFromFavorites } = newsSlice.actions
