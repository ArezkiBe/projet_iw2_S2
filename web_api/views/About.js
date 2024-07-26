import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class AboutUs extends Component {
  render() {
    return {
      type: "div",
      children: [
        { type: Navbar },
        {
          type: "div",
          attributes: {
            class: "container mx-auto p-4 text-center mt-8",
          },
          children: [
            {
              type: "h1",
              attributes: {
                class: "text-3xl font-bold mb-4 font-title",
              },
              children: ["A PROPOS DE NOUS"],
            },
            {
              type: "div",
              attributes: {
                class: "mt-4",
              },
              children: [
                {
                  type: "p",
                  attributes: {
                    class: "mb-4 text-lg",
                  },
                  children: ["Nous sommes une équipe passionnée dédiée à ..."],
                },
                {
                  type: "p",
                  attributes: {
                    class: "text-lg",
                  },
                  children: ["Notre mission est de ..."],
                },
              ],
            },
          ],
        },
        {type: Footer},
      ],
    };
  }
}

export default AboutUs;
