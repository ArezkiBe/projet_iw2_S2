import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import Button from "../components/Button.js";
import MiniReactDom from "../core/MiniReactDom.js";


class Page2 extends Component{

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.rootElement = null;
  }

  setState(props) {
    this.state = {...this.state, ...props};

    this.updateDOM();
  }

  updateDOM() {
    this.rootElement = this.render();
    let update = new CustomEvent("updateDOM", {"detail": this.rootElement})

    window.dispatchEvent(update);

  }


  render() {
    return {
      type: "div",
      attributes: {
        class: "bg-green-200", 
      },
      children: [
        {
          type: BrowserLink,
          props: {
            title: "Page 1",
            path: "/page1"
          }
        },
        {
          type: Button,
          attributes : {
            class: "ml-3",
          },
          events: {
            click: () => alert("Coucou")
          },
          props: {
            title: "Click me!"
          }
        },
        {
          type: "h1",
          attributes: {
            class: "counter"
          },
          children: ["Counter: " + this.state.count],
        },
        {
          type: Button,
          attributes : {
            class: "btn-increment",
          },
          events: {
            click: () => this.setState({ count: this.state.count + 1 }),
          },
          props: {
            title: "Count +1",
          },
        },
      ],
    };
  }
}


export default Page2;