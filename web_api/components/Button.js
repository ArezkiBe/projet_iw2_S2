import { Component } from "../core/MiniReact.js";

class Button extends Component {
  render() {
    return {
      type: "button",
      attributes: {
        class: this.props.attributes.class,
      },
      events: {
        click: [this.props.events.click],
      },
      children: [this.props.props.title],
    };
  }
}

export default Button;
