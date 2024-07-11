import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import MiniReactDom from "../core/MiniReactDom.js";


class About extends Component {
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
          }
        },
      ],
    }
  }
}


export default About;