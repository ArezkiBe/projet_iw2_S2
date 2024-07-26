import BrowserLink from "../components/BrowserLink.js";
import Footer from "../components/Footer.js";
import { Component } from "../core/MiniReact.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Navbar from "../components/Navbar.js";


class Page404 extends Component {
  render() {
    return  {
      type: "div",
      attributes: {
        class: "", 
      },
      children: [
        { type: Navbar },
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
        { type: Footer },
      ],
    }
  }
}


export default Page404;