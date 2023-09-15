import axios from 'axios'

export const newsApi = axios.create({
    baseURL: 'https://newsapi.org',
    params: {
        domains: 'clarin.com',
        apiKey: 'f3a50dc8b3d14b96abeec96fbfec8474'
    }
})

export default newsApi