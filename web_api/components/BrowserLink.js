import { Component } from "../core/MiniReact.js";

class BrowserLink extends Component {
  render() {
    return {
      type: "a",
      attributes: {
        href: this.props.props.path,
        class: this.props.attributes.class,
      },
      events: {
        click: [function (e) {
          e.preventDefault();
          window.history.pushState({}, null, this.props.props.path);
          window.dispatchEvent(new Event("pushstate"));
        }.bind(this)],
      },
      children: [this.props.props.title],
    }
  }
}

export default BrowserLink;