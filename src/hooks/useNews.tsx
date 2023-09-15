import { useEffect, useState } from "react"
import newsApi from "../api/newsApi"
import { News, Article } from '../interfaces/newsInterface';


export const useNews = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [news, setNews] = useState<Article[]>([])

    const getNews = async () => {

        const resp = await newsApi.get<News>('/v2/everything')
        setNews(resp.data.articles)

        setIsLoading(false)

    }


    useEffect(() => {
        getNews()
    }, [])

    return { news, isLoading }


}
