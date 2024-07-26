import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class Contact extends Component {
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
              children: ["CONTACT"],
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
                  children: ["Vous pouvez nous contacter via les moyens suivants :"],
                },
                {
                  type: "form",
                  attributes: {
                    class: "mx-auto max-w-md",
                  },
                  children: [
                    {
                      type: "div",
                      attributes: {
                        class: "mb-4",
                      },
                      children: [
                        {
                          type: "label",
                          attributes: {
                            class: "block text-left font-bold mb-2",
                            for: "name",
                          },
                          children: ["Nom"],
                        },
                        {
                          type: "input",
                          attributes: {
                            class: "border rounded w-full py-2 px-3",
                            type: "text",
                            id: "name",
                            name: "name",
                          },
                        },
                      ],
                    },
                    {
                      type: "div",
                      attributes: {
                        class: "mb-4",
                      },
                      children: [
                        {
                          type: "label",
                          attributes: {
                            class: "block text-left font-bold mb-2",
                            for: "email",
                          },
                          children: ["Email"],
                        },
                        {
                          type: "input",
                          attributes: {
                            class: "border rounded w-full py-2 px-3",
                            type: "email",
                            id: "email",
                            name: "email",
                          },
                        },
                      ],
                    },
                    {
                      type: "div",
                      attributes: {
                        class: "mb-4",
                      },
                      children: [
                        {
                          type: "label",
                          attributes: {
                            class: "block text-left font-bold mb-2",
                            for: "message",
                          },
                          children: ["Message"],
                        },
                        {
                          type: "textarea",
                          attributes: {
                            class: "border rounded w-full py-2 px-3",
                            id: "message",
                            name: "message",
                          },
                        },
                      ],
                    },
                    {
                      type: "button",
                      attributes: {
                        class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                        type: "submit",
                      },
                      children: ["Envoyer"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { type: Footer },
      ],
    };
  }
}

export default Contact;
