import BrowserRouter from "../components/BrowserRouter.js";

const MiniReactDom = {
  render: function (rootElement, routes) {
    new BrowserRouter(rootElement, routes);
  },

  renderStructure: function structureToDom(structure) {

    if (typeof structure.type === "string") {
      const elem = document.createElement(structure.type);
      if (structure.props) {
        for (const propName in structure.props) {
          if (/^data[A-Z]/.test(propName)) {
            elem.dataset[propName.slice(4).toLowerCase()] =
              structure.props[propName];
          } else if (propName === "style") {
            Object.assign(elem.style, structure.props[propName]);
          }
        }
      }
      if (structure.attributes) {
        for (const attrName in structure.attributes) {
          elem.setAttribute(attrName, structure.attributes[attrName]);
        }
      }
      if (structure.events) {
        for (const eventName in structure.events) {
          for (const listener of structure.events[eventName]) {
            elem.addEventListener(eventName, listener);
          }
        }
      }
      if (structure.children) {
        for (const child of structure.children) {
          let subChild;
          if (typeof child === "string") {
            subChild = document.createTextNode(child);
          } else {
            subChild = this.renderStructure(child);
          }
          elem.appendChild(subChild);
        }
      }
      return elem;
    } else {
      const type = structure.type;
      const struct = new type(structure).render();
  
      return this.renderStructure(struct);
    }
  } 
}

export default MiniReactDom;