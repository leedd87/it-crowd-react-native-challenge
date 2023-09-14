import { API_KEY, newsApi } from '../../api/newsApi';
import { setNews, loadingNews } from './newsSlice';

export const getNews = () => {
    return async dispatch => {
        dispatch(loadingNews());

        const resp = await newsApi.get(`${API_KEY}`);
        console.log('🚀 ~ file: thunks.ts:11 ~ return ~ resp:', resp);


        dispatch(setNews(resp))

    };
};
