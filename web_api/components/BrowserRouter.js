const BrowserRouter = function (rootElement, routes)  {
  const managePath = () => {
    const currentPath = window.location.pathname;
    const elementGenerator = routes[currentPath] ?? routes["*"];
    let elem = new elementGenerator().render();
    return elem;
  }

  window.addEventListener("popstate", function () {
    rootElement.replaceChild(this.renderStructure(managePath()), rootElement.childNodes[0]);
  }.bind(this));
  window.addEventListener("pushstate", function () {
    rootElement.replaceChild(this.renderStructure(managePath()), rootElement.childNodes[0]);
  }.bind(this));

  window.addEventListener("updateDOM", function (e) {
    rootElement.replaceChild(this.renderStructure(e.detail), rootElement.childNodes[0]);
  }.bind(this))

  rootElement.appendChild(this.renderStructure(managePath()));

  //const oldPushState = window.history.pushState;
  //window.history.pushState = function (data, title, url) {
  //  oldPushState.call(window.history, data, title, url);
  //  window.dispatchEvent(new Event("popstate"));
  //};
}

export default BrowserRouter;

// export function BrowserLink(props) {
//   return {
//     type: "a",
//     attributes: {
//       href: props.path,
//     },
//     events: {
//       click: [function (e) {
//         e.preventDefault();
//         window.history.pushState({}, null, props.path);
//         window.dispatchEvent(new Event("pushstate"));
//       }],
//     },
//     children: [props.title],
//   };
// }