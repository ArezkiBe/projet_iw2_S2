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
        class: "flex flex-col items-center justify-center w-[5.625rem] h-[3.75rem] bg-orange-500 rounded-md"
      },
      children: [
        {
          type: "span",
          attributes: {
            class: "text-sm font-title"
          },
          children: [weekDay]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm"
          },
          children: [day]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm"
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
            class: "mt-[7.188rem] flex justify-center items-center text-center px-[1.813rem]"
          },
          children: [this.data.getMainPage().description],
        },
        {
          type :"div",
          attributes: {
            class: "mb-[60px]",
          },
          children: [
            {
              type :"div",
              attributes : {
                class: "mt-[3rem] text-center font-bold text-[2.5rem]"
              },
              children: ["Prochainement"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center items-center my-[2.5rem]"
              },
              children: [
                {
                  type: "div",
                  attributes: {
                    class: "flex space-x-6"
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
                    class: "flex items-end space-x-4"
                  },
                  children: [
                    {
                      type: "div",
                      attributes: {},
                      children: [
                        {
                          type: "div",
                          attributes: {
                            class: "flex flex-col items-center w-[7.25rem] h-[15.688rem] border rounded-xl mb-[25px]"
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
                                    class: "mt-[2.5rem] w-[50px] h-[66px]",
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
                                    class: "w-full h-40 object-cover h-[112px] rounded-b-xl",
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
                            class: "flex items-center justify-center text-sm"
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
                            class: "flex flex-col items-center w-[7.25rem] h-[19.313rem] border rounded-xl mb-[25px]"
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
                                    class: "mt-[2.375rem] w-[50px] h-[70px]",
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
                                    class: "w-full h-40 object-cover h-[158px] rounded-b-xl",
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
                            class: "flex items-center justify-center text-sm"
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
                            class: "flex flex-col items-center w-[7.25rem] h-[12.438rem] border rounded-xl mb-[25px]"
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
                                    class: "mt-[0.688rem] w-[50px] h-[66px]",
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
                                    class: "w-full h-40 object-cover h-[107px] rounded-b-xl",
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
                            class: "flex items-center justify-center text-sm"
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
                class: "text-[40px] font-bold mb-[24px]"
              },
              children: ["Les Jeux"]
            },
            {
              type: "div",
              attributes: {
                class: "grid grid-cols-2 grid-flow-row auto-rows-max gap-x-20 gap-y-5"
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/athletism.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/archery.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/pingPong.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/synchroSwimming.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                }
              ]
            }
          ]
        },
        {
          type: "div",
          attributes: {
            class: "flex flex-col justify-center items-center mb-[40px]"
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "text-[40px] font-bold mb-[24px]"
              },
              children: ["Sponsors"]
            },
            {
              type: "div",
              attributes: {
                class: "grid grid-cols-2 grid-flow-row auto-rows-max gap-x-20 gap-y-5"
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/athletism.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/archery.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
                    src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/pingPong.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                    alt: ""
                  }
                },
                {
                  type: "img",
                  attributes: {
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