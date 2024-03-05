import "./sources.css";
import { Source } from "../../utils/interfaces";

class Sources {
  draw(data: Source[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>(
      "#sourceItemTemp"
    );

    data.forEach((item: Source) => {
      const sourceClone = sourceItemTemp?.content.cloneNode(true);
      if (sourceClone && sourceClone instanceof DocumentFragment) {

        (sourceClone.querySelector(".source__item-name") as HTMLElement).textContent = item.name;
        (sourceClone.querySelector(".source__item") as HTMLElement).setAttribute("data-source-id", item.id);

        fragment.append(sourceClone);
      }
    });

    document.querySelector(".sources")?.append(fragment);
  }
}

export default Sources;
