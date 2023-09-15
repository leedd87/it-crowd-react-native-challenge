import axios from 'axios'

export const newsApi = axios.create({
    baseURL: 'https://newsapi.org',
    params: {
        domains: 'clarin.com',
        //apiKey: 'f3a50dc8b3d14b96abeec96fbfec8474'
        apiKey: 'a9d708e85c944c60ba59cb8b3c882329'
    }
})

export const getNewsByCategoryApi = axios.create({
    baseURL: 'https://newsapi.org',
    params: {
        country: 'ar',
        category: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
        //apiKey: 'f3a50dc8b3d14b96abeec96fbfec8474'
        apiKey: 'a9d708e85c944c60ba59cb8b3c882329'
    }
})

export default newsApi