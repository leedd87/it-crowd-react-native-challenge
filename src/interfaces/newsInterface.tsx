export interface News {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: {
        id: null | string;
        name: string;
    }
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: null | string;
}

// export interface Source {
//     id: null | string;
//     name: string;
// }
