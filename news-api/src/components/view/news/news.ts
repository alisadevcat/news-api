import "./news.css";
import { Article } from "../../utils/interfaces";
class News {
  draw(data: Article[]) {
    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector<HTMLTemplateElement>(
      "#newsItemTemp"
    );

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp?.content?.cloneNode(true);
      if (newsClone && newsClone instanceof DocumentFragment) {
        if (idx % 2)
          (newsClone.querySelector(
            ".news__item"
          ) as HTMLDivElement).classList.add("alt");

        (newsClone.querySelector(
          ".news__meta-photo"
        ) as HTMLDivElement).style.backgroundImage = `url(${
          item.urlToImage || "img/news_placeholder.jpg"
        })`;
        (newsClone.querySelector(
          ".news__meta-author"
        ) as HTMLElement).textContent = item.author || item.source.name;
        (newsClone.querySelector(
          ".news__meta-date"
        ) as HTMLElement).textContent = item.publishedAt
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-");

        (newsClone.querySelector(
          ".news__description-title"
        ) as HTMLHeadingElement).textContent = item.title;
        (newsClone.querySelector(
          ".news__description-source"
        ) as HTMLHeadingElement).textContent = item.source.name;
        (newsClone.querySelector(
          ".news__description-content"
        ) as HTMLParagraphElement).textContent = item.description;
        (newsClone.querySelector(
          ".news__read-more a"
        ) as HTMLParagraphElement).setAttribute("href", item.url);

        fragment.append(newsClone);
      }
    });

    (document.querySelector(".news") as HTMLElement).innerHTML = "";
    (document.querySelector(".news") as HTMLElement).appendChild(fragment);
  }
}

export default News;
