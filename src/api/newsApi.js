import axios from 'axios'

export const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey='
})

export const API_KEY = 'f3a50dc8b3d14b96abeec96fbfec8474';

