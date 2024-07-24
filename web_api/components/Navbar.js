import { Component } from "../core/MiniReact.js";
import BrowserLink from "./BrowserLink.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return {
      type: "nav",
      attributes: {
        class: "bg-blue-500 p-4 flex items-center justify-between",
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "flex items-center",
          },
          children: [
            {
              type: "button",
              attributes: {
                class: "text-white focus:outline-none md:hidden",
                onclick: this.toggleMenu,
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/burgerMenu.svg?alt=media&token=4f432070-3785-4b93-8a2e-001eea07137b",
                    class: "cursor-pointer",
                  },
                  events: {
                    click: [this.toggleMenu],
                  
                  },
                },
              ],
            },
            {
              type: "span",
              attributes: {
                class: "text-white text-lg ml-2",
              },
              children: ["Menu"],
            },
          ],
        },
        {
          type: "ul",
          attributes: {
            class: `md:flex md:space-x-4 ${this.state.isMenuOpen ? "block" : "hidden"} md:block`,
          },
          children: [
            {
              type: "li",
              children: [
                {
                  type: BrowserLink,
                  props: { href: "/", title: "Accueil"},
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: BrowserLink,
                  props: { href: "/page1", title: "Page 1"},
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: BrowserLink,
                  props: { href: "/page2", title: "Page 2"},
                },
              ],
            },
          ],
        },
      ],
    };
  }
}

export default Navbar;
