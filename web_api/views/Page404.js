import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import MiniReactDom from "../core/MiniReactDom.js";


class Page404 extends Component {
  render() {
    return  {
      type: "h1",
      attributes: {
        class: "", 
      },
      children: [
        {
          type: BrowserLink,
          props: {
            title: "Page 2",
            path: "/page2"
          }
        },
        {
          type: "i",
          attributes : {
            class: "ml-3",
          },
          children: ["Page 404"],
        },
      ],
    }
  }
}


export default Page404;