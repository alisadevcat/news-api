interface StatusResponse{
    status: string;  
}
export interface ApiArticlesResponse extends StatusResponse{
    totalResults?: number;
    articles?: Article[]
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
export interface ApiSourcesResponse extends StatusResponse{
    sources?: Source[];
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

export interface ApiResponse extends ApiArticlesResponse,ApiSourcesResponse {}


// load<T>(
//     method: string,
//     endpoint: Endpoints,
//     callback: CallbackFunction<T>,
//     options: UrlOptions,
//   ) {
//     fetch(this.makeUrl(options, endpoint), { method })
//       .then(this.errorHandler)
//       .then((res) => res.json())
//       .then((data) => callback(data))
//       .catch((err) => console.error(err));
//   }