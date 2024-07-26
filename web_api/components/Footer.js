import { Component } from "../core/MiniReact.js";
import BrowserLink from "./BrowserLink.js";

class Footer extends Component {
  render() {
    return {
      type: "div",
      attributes: {
        class: "flex flex-col justify-center items-center bg-black mt-[40px]"
      },
      children: [
        {
          type: BrowserLink,
          attributes: {
            class: "text-white lg:text-[35.5px] underline mt-[32px] lg:mt-[45.44px] cursor-pointer"
          },
          props: {
            path: "/contact",
            title: "Contact"
          }
        },
        {
          type: BrowserLink,
          attributes: {
            class: "text-white lg:text-[35.5px] underline mt-[32px] lg:mt-[45.44px] cursor-pointer"
          },
          props: {
            path: "/about",
            title: "A propos"
          }
        },
        {
          type: "div",
          attributes: {
            class: "text-white lg:text-[35.5px] mt-[40px] lg:mt-[45.44px] "
          },
          children: ["Suivez-nous sur"]
        },
        {
          type: "div",
          attributes: {
            class: "flex justify-center items-center mt-[32px] lg:mt-[53.96px] space-x-[25px] lg:space-x-[56.8px] mb-[45px] lg:mb-[53.96px]"
          },
          children: [
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/X.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer lg:w-[56.8px] lg:h-[56.8px]"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/facebook.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer lg:w-[56.8px] lg:h-[56.8px]"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/linkedin.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer lg:w-[56.8px] lg:h-[56.8px]"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/instagram.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer lg:w-[56.8px] lg:h-[56.8px]"
              }
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/tikTok.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                alt: "",
                class: "cursor-pointer lg:w-[56.8px] lg:h-[56.8px]"
              }
            }
          ]
        }
      ]
    }
  }
}

export default Footer;
