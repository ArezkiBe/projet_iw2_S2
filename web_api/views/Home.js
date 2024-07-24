import { Component } from "../core/MiniReact.js";
import Table from "../components/Table.js";
import BrowserLink from "../components/BrowserLink.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";





class Home extends Component{


  constructor(data) {
    super();
    this.data = data;
  }


  renderCalendarDay(weekDay, day, Month) {
    return {
      type: "div",
      attributes: {
        class: "flex flex-col items-center justify-around w-[5.625rem] lg:w-[272.6px] h-[3.75rem] lg:h-[106.5px] bg-orange-500 rounded-md"
      },
      children: [
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte"
          },
          children: [weekDay]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte"
          },
          children: [day]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte"
          },
          children: [Month]
        }
      ]
    }
  }

  render() {
    return  {
      type: "div",
      children: [
        {
          type: Banner,
          props: {
            bannerSrc: "https://picsum.photos/900/600",
            logoSrc: "https://picsum.photos/300",
            showLogo: true,
          }
        },
        {
          type :"div",
          attributes : {
            class: "mt-[7.188rem] lg:mt-[81.65px] flex justify-center items-center text-center px-[1.813rem] lg:px[81.65px] font-texte lg:text-[35px]"
          },
          children: [this.data.getMainPage().description],
        },
        {
          type :"div",
          attributes: {
            class: "mb-[60px] lg:mb-[150.52px]",
          },
          children: [
            {
              type :"div",
              attributes : {
                class: "mt-[3rem] lg:mt-[56.8px] text-center font-bold lg:text-[56.8px] font-title"
              },
              children: ["Prochainement"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center items-center my-[28.4px]"
              },
              children: [
                {
                  type: "div",
                  attributes: {
                    class: "flex space-x-6 lg:space-x-20"
                  },
                  children: [
                    this.renderCalendarDay("Sam", "29", "Juin"),
                    this.renderCalendarDay("Dim", "30", "Juin"),
                    this.renderCalendarDay("Lun", "1", "Jui"),
                  ]
                },
              ]
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center"
              },
              children: [
                {
                  type: "div",
                  attributes: {
                    class: "flex items-end space-x-4 lg:space-x-20"
                  },
                  children: [
                    {
                      type: "div",
                      attributes: {},
                      children: [
                        {
                          type: "div",
                          attributes: {
                            class: "flex flex-col items-center w-[7.25rem] lg:w-[272.72px] h-[15.688rem] lg:h-[439.49px] border rounded-xl mb-[25px]"
                          },
                          children: [
                            {
                              type: "div",
                              attributes: {
                                class: "flex justify-center"
                              },
                              children: [
                                {
                                  type: "img",
                                  attributes: {
                                    class: "mt-[2.5rem] lg:mt-[76.68px] w-[50px] lg:w-[63.9px] h-[66px] lg:x-[85.2px]",
                                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/silver_medal.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                                    alt: "Silver Medal"
                                  }
                                }
                              ]
                            },
                            {
                              type: "div",
                              attributes: {
                                class: "h-full flex items-end rounded-b-xl"
                              },
                              children: [
                                {
                                  type: "img",
                                  attributes: {
                                    class: "w-full lg:w-[270.51px] h-40 object-cover h-[112px] lg:h-[94.43px] rounded-b-xl",
                                    src: "https://picsum.photos/900/600",
                                    alt: "La Concorde"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attributes: {
                            class: "flex items-center justify-center text-sm lg:text-[38.34px]"
                          },
                          children: ["La concorde"]
                        }
                      ]
                    },
                    {
                      type: "div",
                      attributes: {},
                      children: [
                        {
                          type: "div",
                          attributes: {
                            class: "flex flex-col items-center w-[7.25rem] lg:w-[272.72px] h-[19.313rem] lg:h-[538.18px] border rounded-xl mb-[25px]"
                          },
                          children: [
                            {
                              type: "div",
                              attributes: {
                                class: "flex justify-center"
                              },
                              children: [
                                {
                                  type: "img",
                                  attributes: {
                                    class: "mt-[2.375rem] lg:mt-[76.68px] w-[50px] lg:w-[63.9px] h-[70px] lg:h-[94.43px]",
                                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/gold_medal.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                                    alt: "Gold Medal"
                                  }
                                }
                              ]
                            },
                            {
                              type: "div",
                              attributes: {
                                class: "h-full flex items-end rounded-b-xl"
                              },
                              children: [
                                {
                                  type: "img",
                                  attributes: {
                                    class: "w-full lg:w-[270.51px] h-40 object-cover h-[158px] rounded-b-xl",
                                    src: "https://picsum.photos/900/600",
                                    alt: "Centre Aquatique"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attributes: {
                            class: "flex items-center justify-center text-sm lg:text-[38.34px]"
                          },
                          children: ["Centre aquatique"]
                        }
                      ]
                    },
                    {
                      type: "div",
                      attributes: {},
                      children: [
                        {
                          type: "div",
                          attributes: {
                            class: "flex flex-col items-center w-[7.25rem] lg:w-[272.72px] h-[12.438rem] lg:h-[351.45px] border rounded-xl mb-[25px]"
                          },
                          children: [
                            {
                              type: "div",
                              attributes: {
                                class: "flex justify-center"
                              },
                              children: [
                                {
                                  type: "img",
                                  attributes: {
                                    class: "mt-[0.688rem] lg:mt-[38.34px] w-[50px] lg:w-[63.9px] h-[66px] lg:h-[79.52px]",
                                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/bronze_medal.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662",
                                    alt: "Bronze Medal"
                                  }
                                }
                              ]
                            },
                            {
                              type: "div",
                              attributes: {
                                class: "h-full flex items-end rounded-b-xl"
                              },
                              children: [
                                {
                                  type: "img",
                                  attributes: {
                                    class: "w-full lg:w-[270.51px] h-40 object-cover h-[107px] rounded-b-xl",
                                    src: "https://picsum.photos/900/600",
                                    alt: "PONT ALEXANDRE III"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "div",
                          attributes: {
                            class: "flex items-center justify-center text-sm lg:text-[38.34px]"
                          },
                          children: ["Pont Alexandre III"]
                        }
                      ]
                    }
                  ]
                }
              ]
            }            
          ],
        },
        {
          type: "div",
          attributes: {
            class: "flex flex-col justify-center items-center mb-[80px]"
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "text-[40px] lg:text-[56.8px] font-bold mb-[24px] lg:mb-[17.04px]"
              },
              children: ["Les Jeux"]
            },
            {
              type: "div",
              attributes: {
                class: "grid grid-cols-5 grid-flow-row auto-rows-max gap-x-20 gap-y-5"
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/athletism.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/archery.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/athletism.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/pingPong.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/synchroSwimming.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/archery.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
              ]
            }
          ]
        },
        {
          type: "div",
          attributes: {
            class: "flex flex-col justify-center items-center mb-[40px] lg:mb-[102.24px]"
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "text-[40px] lg:text-[56.8px] font-bold mb-[24px] lg:mb-[7.04px]"
              },
              children: ["Sponsors"]
            },
            {
              type: "div",
              attributes: {
                class: "grid grid-cols-5 grid-flow-row auto-rows-max gap-x-20 gap-y-5"
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/athletism.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/archery.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/pingPong.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    class: "lg:w-[127.09px] lg:h-[127.09px]",
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/synchroSwimming.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                }
              ]
            }
          ]
        },
        {
          type: Footer,
        }
      ],
    }

  }
}


export default Home;