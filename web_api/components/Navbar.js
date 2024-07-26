import { Component } from "../core/MiniReact.js";
import MiniReactDom from "../core/MiniReactDom.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen }, this.updateMenu.bind(this));
  }

  updateMenu() {
    const menuElement = this.renderMenu();
    let update = new CustomEvent("updateDOM", {
      detail: { id: "navbar-menu", element: menuElement },
    });
    window.dispatchEvent(update);
  }

  setState(newState, callback) {
    this.state = { ...this.state, ...newState };
    if (callback) callback();
  }

  render() {
    return {
      type: "nav",
      attributes: {
        class: "bg-[#969696] text-black p-4 sticky top-0 z-50 h-[60px]",
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "container mx-auto flex justify-between items-center",
          },
          children: [
            {
              type: "a",
              attributes: {
                href: "/",
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/olympics-torch-svgrepo-com.svg?alt=media&token=64767841-7b7a-4308-ae9a-449762189644",
                    class: "h-8",
                    alt: "Logo",
                  },
                },
              ],
            },
            {
              type: "div",
              attributes: {
                class: "hidden md:flex space-x-4",
              },
              children: this.renderLinks(),
            },
            {
              type: "button",
              attributes: {
                class: "md:hidden focus:outline-none",
                type: "button",
              },
              events: {
                click: this.toggleMenu.bind(this),
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/burgerMenu.svg?alt=media&token=8badf9be-6a18-4ecc-bbd7-dbd7fcd5ed66",
                    class: "w-6 h-6",
                    alt: "Menu",
                  },
                },
              ],
            },
          ],
        },
        this.renderMenu(),
      ],
    };
  }

  renderLinks() {
    const links = [
      { href: "/", text: "HOME" },
      { href: "/calendar", text: "CALENDRIER" },
      { href: "/map", text: "CARTE INTERACTIVE" },
      { href: "/jeux", text: "JEUX" },
      { href: "/spots", text: "SPOTS" },
      { href: "/about", text: "A PROPOS" },
      { href: "/contact", text: "CONTACT" },
    ];

    return links.map((link) => ({
      type: "a",
      attributes: {
        href: link.href,
        class: "text-black hover:text-gray-400 block text-center py-2 md:text-left md:font-normal font-title",
      },
      children: [link.text],
    }));
  }

  renderMenu() {
    if (!this.state.isOpen) {
      return {
        type: "div",
        attributes: {
          id: "navbar-menu",
          class: "hidden",
        },
        children: [],
      };
    }

    return {
      type: "div",
      attributes: {
        id: "navbar-menu",
        class: "fixed inset-0 bg-[#969696] flex flex-col items-center justify-center z-50",
      },
      children: [
        {
          type: "button",
          attributes: {
            class: "absolute top-4 right-4 focus:outline-none",
            type: "button",
          },
          events: {
            click: this.toggleMenu.bind(this),
          },
          children: [
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/quit.svg?alt=media&token=2c0a05af-5db9-4d6f-827e-71da8e399656",
                class: "w-6 h-6",
                alt: "Close Menu",
              },
            },
          ],
        },
        ...this.renderLinks().map((link) => ({
          type: "div",
          attributes: {
            class: "w-full px-8 py-4 text-left hover:bg-gray-400",
          },
          children: [
            {
              type: "a",
              attributes: {
                href: link.attributes.href,
                class: "block text-lg font-bold font-title",
              },
              children: [link.children[0]],
            },
          ],
        })),
      ],
    };
  }
}

export default Navbar;
