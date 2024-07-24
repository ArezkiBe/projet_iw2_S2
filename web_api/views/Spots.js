import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import Button from "../components/Button.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Banner from "../components/Banner.js";


class Spots extends Component{

  constructor(data) {
    super();
    this.data = data;
  }


  render() {
    return {
      type: "div",
      attributes: {
        class: "", 
      },
      children: [
        {
          type: Banner,
          props: {
            bannerSrc: "https://picsum.photos/900/600",
            logoSrc: "https://picsum.photos/300",
            showLogo: false,
          }
        },
        {
          type: "div",
          attributes: {
            class: "mt-[54px] lg:mt-[102.24px]"
          },
          children: [
            {
              type :"div",
              attributes : {
                class: "text-center font-bold text-[2.5rem] lg:text-[56.8px]"
              },
              children: ["Spots"],
            },
            {
              type :"div",
              attributes : {
                class: "mt-[24px] lg:mt-[56.8px] flex justify-center items-center text-center lg:text-[35.5px] px-[1.813rem]"
              },
              children: [this.data.getMainPage().description],
            },
          ]
        },
        this.renderFilter(),
        this.renderSpots(),
      ],
    };
  }



  renderFilter () {
    return {
      type: "div",
      attributes: {
        class: "w-full overflow-x-auto no-scrollbar mt-[54px] lg:mt-[102.24px] mb-[24px]"
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "flex space-x-2"
          },
          children: [
            {
              type: Button,
              attributes: {
                class: "flex-shrink-0 w-24 h-7 bg-[#D9D9D9] lg:text-[35.5px] rounded-[0.625rem] lg:w-[248.5px] lg:h-[56.8px]"
              },
              events : {
                click: () => ""
              },
              props : {
                title: "Interieur"
              }
            },
            {
              type: Button,
              attributes: {
                class: "flex-shrink-0 w-24 h-7 bg-[#D9D9D9] lg:text-[35.5px] rounded-[0.625rem] lg:w-[248.5px] lg:h-[56.8px]"
              },
              events : {
                click: () => ""
              },
              props : {
                title: "Extérieur"
                
              }
            },
            {
              type: Button,
              attributes: {
                class: "flex-shrink-0 w-24 h-7 bg-[#D9D9D9] lg:text-[35.5px] rounded-[0.625rem] lg:w-[248.5px] lg:h-[56.8px]"
              },
              events : {
                click: () => ""
              },
              props : {
                title: "5 étoiles"
              }
            },
            {
              type: Button,
              attributes: {
                class: "flex-shrink-0 w-24 h-7 bg-[#D9D9D9] lg:text-[35.5px] rounded-[0.625rem] lg:w-[248.5px] lg:h-[56.8px]"
              },
              events : {
                click: () => ""
              },
              props : {
                title: "4 étoiles"
              }
            },
            {
              type: Button,
              attributes: {
                class: "flex-shrink-0 w-24 h-7 bg-[#D9D9D9] lg:text-[35.5px] rounded-[0.625rem] lg:w-[248.5px] lg:h-[56.8px]"
              },
              events : {
                click: () => ""
              },
              props : {
                title: "3 étoiles"
              }
            },
            {
              type: Button,
              attributes: {
                class: "flex-shrink-0 w-24 h-7 bg-[#D9D9D9] lg:text-[35.5px] rounded-[0.625rem] lg:w-[248.5px] lg:h-[56.8px]"
              },
              events : {
                click: () => ""
              },
              props : {
                title: "2 étoiles"
              }
            },
            {
              type: Button,
              attributes: {
                class: "flex-shrink-0 w-24 h-7 bg-[#D9D9D9] lg:text-[35.5px] rounded-[0.625rem] lg:w-[248.5px] lg:h-[56.8px]"
              },
              events : {
                click: () => ""
              },
              props : {
                title: "1 étoile"
              }
            }
          ]
        }
      ]
    }
  }


  renderSpots () {
    return {
      type: "div",
      attributes: {
        class: "flex justify-center items-center border-t-2 ml-4 mr-[13px] lg:mt-[102.24px]"
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "px-2 pb-[26px] rounded-lg"
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "font-bold text-center lg:text-[45.44px] my-[10px]"
              },
              children: ["LA CONCORDE"]
            },
            {
              type: "div",
              attributes: {
                class: "flex items-center bg-white space-x-20 lg:w-[937.2px] lg:h-[357.84px]"
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/concorde.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                    alt: "La Concorde",
                    class: "w-[102px] lg:w-[213px] h-[102px] lg:h-[213px] rounded-md"
                  }
                },
                {
                  type: "div",
                  attributes: {
                    class: "ml-[16px]"
                  },
                  children: [
                    {
                      type: "div",
                      attributes: {
                        class: "font-semibold text-[11px] lg:text-[35.5px] opacity-50 text-center"
                      },
                      children: ["Place de la Madeleine 75008 Paris"]
                    },
                    {
                      type: "div",
                      attributes: {
                        class: "flex justify-center items-center space-x-10 mt-[10px]"
                      },
                      children: [
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[30px] lg:w-[78.1px] h-[30px] lg:h-[84.49px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/archery.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[30px] lg:w-[78.1px] h-[30px] lg:h-[84.49px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/pingPong.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[30px] lg:w-[78.1px] h-[30px] lg:h-[84.49px]"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "div",
                  attributes: {
                    class: "border-l-2 border-gray-300 h-[100px] lg:h-[168.27px] ml-4 mr-2"
                  }
                },
                {
                  type: "div",
                  attributes: {
                    class: "flex flex-col justify-center items-center"
                  },
                  children: [
                    {
                      type: Button,
                      attributes: {
                        class: "bg-red-500 text-white lg:text-[35.5px] lg:w-[213.71px] lg:h-[95.14px] px-4 py-2 rounded-[14.2px] cursor-pointer"
                      },
                      events : {
                        click: () => ""
                      },
                      props : {
                        title: "DETAILS"
                      }
                    },
                    {
                      type: "div",
                      attributes: {
                        class: "flex space-x-[5px] mt-2"
                      },
                      children: [
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/full_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] lg:w-[35.5px] h-[14px] lg:h-[42.6px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/full_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] lg:w-[35.5px] h-[14px] lg:h-[42.6px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/empty_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] lg:w-[35.5px] h-[14px] lg:h-[42.6px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/empty_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] lg:w-[35.5px] h-[14px] lg:h-[42.6px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/empty_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] lg:w-[35.5px] h-[14px] lg:h-[42.6px]"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }    
  }
}


export default Spots;