import { Component } from "../core/MiniReact.js";

class Banner extends Component {
  renderLogo (state) {
    if (!state) return "";

    return {
      type: "div",
      attributes: {
        class: " absolute left-1/2 transform -translate-x-1/2 -bottom-[75px]",
        // style: "background-image: url(" + this.props.attributes.src + ");",
      },
      children: [
        {
          type: "img",
          attributes: {
            class: "object-cover object-center w-[9.375rem] h-[9.375rem] rounded-full",
            src: this.props.props.logoSrc,
          },
        }
      ]
    }
  }

  render() {
    return {
      type: "div",
      attributes: {
        class: "relative",
        // style: "background-image: url(" + this.props.attributes.src + ");",
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "w-full",
            // style: "background-image: url(" + this.props.attributes.src + ");",
          },
          children: [
            {
              type: "img",
              attributes: {
                class: "object-cover w-full h-[13.438rem] sm:h-[21.875rem] md:h-[28.125rem]",
                src: this.props.props.bannerSrc,
              },
            }
          ]
        },
        this.renderLogo(this.props.props.showLogo)
      ]
    };
  }
}

export default Banner;
