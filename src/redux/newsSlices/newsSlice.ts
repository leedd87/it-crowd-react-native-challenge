import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface ArticleAddState {

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
    //TESTING
    // extraReducers:(builder)=>{
    //     builder.addCase(getNewsAsyncThunk.fulfilled,(state,action)=>{
    //         state.entries = action.payload
    //     })
    // }
})

export const { addToFavorites, removeFromFavorites } = newsSlice.actions
