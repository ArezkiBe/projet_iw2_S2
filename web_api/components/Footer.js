import { Component } from "../core/MiniReact.js";
import BrowserLink from "./BrowserLink.js";

class Footer extends Component {
  render() {
    return {
      type: "div",
      attributes: {
        class: "flex flex-col justify-center items-center bg-black"
      },
      children: [
        {
          type: BrowserLink,
          attributes: {
            class: "text-white underline mt-[32px] cursor-pointer"
          },
          props: {
            path: "/",
            title: "Contact"
          }
        },
        {
          type: "div",
          attributes: {
            class: "text-white underline mt-[32px] cursor-pointer"
          },
          children: ["A propos"]
        },
        {
          type: "div",
          attributes: {
            class: "text-white mt-[40px]"
          },
          children: ["Suivez-nous sur"]
        },
        {
          type: "div",
          attributes: {
            class: "flex justify-center items-center mt-[32px] space-x-[25px] mb-[45px]"
          },
          children: [
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/X.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/facebook.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/linkedin.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/instagram.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/tikTok.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer"
              }
            }
          ]
        }
      ]
    }
  }
}

export default Footer;
