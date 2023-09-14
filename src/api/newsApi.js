import axios from 'axios'

export const newsApi = axios.create({
    //baseURL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey='
    baseURL: 'https://newsapi.org',
    params: {
        country: 'us',
        apiKey: 'f3a50dc8b3d14b96abeec96fbfec8474'
    }
})

// export const API_KEY = 'f3a50dc8b3d14b96abeec96fbfec8474';
export default newsApi