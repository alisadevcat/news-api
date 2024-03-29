import AppController from "../controller/controller";
import { AppView } from "../view/appView";
import  {ApiArticlesResponse} from "../utils/interfaces";
import {ApiSourcesResponse} from "../utils/interfaces";

class App {
  controller: AppController = new AppController();
  view: AppView = new AppView();

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (document
      .querySelector(".sources") as HTMLElement)
      .addEventListener("click", (e) =>
        this.controller.getNews(e, (data: ApiArticlesResponse) =>
          this.view.drawNews(data)
        )
      );
    this.controller.getSources((data: ApiSourcesResponse) => this.view.drawSources(data));
  }
}

export default App;
