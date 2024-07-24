import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import Button from "../components/Button.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Banner from "../components/Banner.js";


class Spots extends Component{

  constructor(props) {
    super();
    this.data = props.data;
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
            class: "mt-[54px]"
          },
          children: [
            {
              type :"div",
              attributes : {
                class: "text-center font-bold text-[2.5rem]"
              },
              children: ["Spots"],
            },
            {
              type :"div",
              attributes : {
                class: "mt-[24px] flex justify-center items-center text-center px-[1.813rem]"
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
        class: "w-full overflow-x-auto no-scrollbar mt-[54px] mb-[24px]"
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
                class: "flex-shrink-0 w-24 h-7 bg-blue-500 text-white rounded-xl"
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
                class: "flex-shrink-0 w-24 h-7 bg-blue-500 text-white rounded-xl"
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
                class: "flex-shrink-0 w-24 h-7 bg-blue-500 text-white rounded-xl"
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
                class: "flex-shrink-0 w-24 h-7 bg-blue-500 text-white rounded-xl"
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
                class: "flex-shrink-0 w-24 h-7 bg-blue-500 text-white rounded-xl"
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
                class: "flex-shrink-0 w-24 h-7 bg-blue-500 text-white rounded-xl"
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
                class: "flex-shrink-0 w-24 h-7 bg-blue-500 text-white rounded-xl"
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
        class: "flex justify-center items-center border-t-2 ml-4 mr-[13px]"
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
                class: "font-bold text-center my-[10px]"
              },
              children: ["LA CONCORDE"]
            },
            {
              type: "div",
              attributes: {
                class: "flex items-center bg-white"
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/concorde.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                    alt: "La Concorde",
                    class: "w-[102px] h-[102px] rounded-md"
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
                        class: "font-semibold text-[11px] opacity-50 w-[119px] text-center"
                      },
                      children: ["Place de la Madeleine 75008 Paris"]
                    },
                    {
                      type: "div",
                      attributes: {
                        class: "flex justify-center items-center space-x-2 mt-[10px]"
                      },
                      children: [
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[30px] h-[30px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/archery.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[30px] h-[30px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/pingPong.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[30px] h-[30px]"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "div",
                  attributes: {
                    class: "border-l-2 border-gray-300 h-[100px] ml-4 mr-2"
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
                        class: "bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer"
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
                            class: "w-[15px] h-[14px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/full_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] h-[14px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/empty_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] h-[14px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/empty_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] h-[14px]"
                          }
                        },
                        {
                          type: "img",
                          attributes: {
                            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/empty_star.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                            alt: "",
                            class: "w-[15px] h-[14px]"
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