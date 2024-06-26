import { Component } from "../core/MiniReact.js";
import Table from "../components/Table.js";
import BrowserLink from "../components/BrowserLink.js";
import MiniReactDom from "../core/MiniReactDom.js";





class Page1 extends Component{
  render() {
    return  {
      type: "div",
      children: [
        {
          type: BrowserLink,
          props: {
            title: "Page 2",
            path: "/page2"
          }
        },
        {
          type: Table,
        },
      ],
    }

  }
}


export default Page1;