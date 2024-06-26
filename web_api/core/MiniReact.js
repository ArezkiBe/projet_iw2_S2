export const createElement = function () {};


export class Component {

  constructor(props) {
    this.props = props || {};
  }

  render() {
    throw new Error("Render method should be implemented by subclass");
  }
}
