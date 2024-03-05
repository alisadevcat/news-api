import News from './news/news';
import Sources from './sources/sources';
import {ApiArticlesResponse} from '../utils/interfaces';
import {ApiSourcesResponse} from '../utils/interfaces';

export class AppView {
    news: News = new News;
    sources: Sources = new Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ApiArticlesResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ApiSourcesResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
