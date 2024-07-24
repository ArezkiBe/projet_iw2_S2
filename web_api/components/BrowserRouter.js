import Data from "../core/Data.js";
import MiniReactDom from "../core/MiniReactDom.js";

class BrowserRouter {
  constructor(rootElement, routes) {
    this.rootElement = rootElement;
    this.routes = routes;
    this.init();
  }

  async init() {
    const managePath = this.managePath.bind(this);

    window.addEventListener("popstate", async() => {
      this.rootElement.replaceChild(MiniReactDom.renderStructure(await managePath()), this.rootElement.childNodes[0]);
      window.dispatchEvent(new Event("pageLoaded"));
    });
    window.addEventListener("pushstate", async() => {
      this.rootElement.replaceChild(MiniReactDom.renderStructure(await managePath()), this.rootElement.childNodes[0]);
      window.dispatchEvent(new Event("pageLoaded"));
    });
    window.addEventListener("updateDOM", (e) => {
      this.updateElement(e.detail.id, e.detail.element);
    });

    this.rootElement.appendChild(MiniReactDom.renderStructure(await managePath()));
    window.dispatchEvent(new Event("pageLoaded"));
  }

  async managePath () {
    const data = new Data();
    await data.fetchData();
    const currentPath = window.location.pathname;
    const queryParams = this.getQueryParams();
    const elementGenerator = this.routes[currentPath] ?? this.routes["*"];
    let elem = new elementGenerator({...data, ...queryParams}).render();
    return elem;
  }

  getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
      queryParams[key] = value;
    }
    return queryParams;
  }

  updateElement(id, newElementStructure) {
    const oldElement = document.getElementById(id);
    const newElement = MiniReactDom.renderStructure(newElementStructure);

    if (oldElement && newElement) {
      oldElement.replaceWith(newElement);
    }

    window.dispatchEvent(new Event("pageLoaded"));
  }
}

export default BrowserRouter;