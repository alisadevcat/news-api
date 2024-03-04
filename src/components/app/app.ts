import AppController from "../controller/controller";
import { AppView } from "../view/appView";
import { ApiArticlesResponse } from "../utils/interfaces";
import { Sources } from "../utils/interfaces";

class App {
  controller: AppController = new AppController();
  view: AppView = new AppView();

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document
      .querySelector(".sources")!
      .addEventListener("click", (e) =>
        this.controller.getNews(e, (data: ApiArticlesResponse) =>
          this.view.drawNews(data)
        )
      );
    this.controller.getSources((data: Sources) => this.view.drawSources(data));
  }
}

export default App;
