export default interface ApiArticlesResponse{
    status: string;
    totalResults: number;
    articles: Article[]
}
export interface Src{
    id:  null;
    name: string;
}
export interface Article{
    source: Src;
    title: string;
    description: string;
    author: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface Sources{
    status?: string;
    sources: Source[];
}

export interface Source{
        id: string;
        name: string;
        description: string
        url: string;
        category: string;
        language: string;
        country: string;
}