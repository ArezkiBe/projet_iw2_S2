import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import Button from "../components/Button.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Spots extends Component {

  constructor(props) {
    super();
    this.data = props.data;
    const spots = this.data.getSpots();
    this.state = {
      spots: spots,
      filterType: "All",
    };
  }

  setFilterType(type) {
    if (this.state.filterType === type) {
      this.state.filterType = "All";
    } else {
      this.state.filterType = type;
    }
    this.updateFilteredSpots();
  }

  updateFilteredSpots() {
    const filterType = this.state.filterType;
    const allSpots = this.data.getSpots();
    let filteredSpots;

    if (filterType === "All") {
      filteredSpots = allSpots;
    } else {
      filteredSpots = allSpots.filter(spot => {
        if (filterType === "Indoor" || filterType === "Outdoor") {
          return spot.type.includes(filterType);
        }
        return spot.rating.toString() === filterType;
      });
    }

    this.state.spots = filteredSpots;
    this.update();
  }

  update() {
    const element = this.render();
    const root = document.getElementById('root');
    root.replaceChild(MiniReactDom.renderStructure(element), root.firstChild);
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
                class: "text-center font-bold text-[2.5rem] font-title"
              },
              children: ["Spots"],
            },
            {
              type :"div",
              attributes : {
                class: "mt-[24px] flex justify-center items-center text-center px-[1.813rem] font-texte"
              },
              children: [this.data.getMainPage().description],
            },
          ]
        },
        this.renderFilter(),
        this.renderSpots(),
        { type: Footer },
      ],
    };
  }

  renderFilter () {
    const filterButtons = [
      { text: "Intérieur", filter: "Indoor" },
      { text: "Extérieur", filter: "Outdoor" },
      { text: "5 étoiles", filter: "5" },
      { text: "4 étoiles", filter: "4" },
      { text: "3 étoiles", filter: "3" },
      { text: "2 étoiles", filter: "2" },
      { text: "1 étoile", filter: "1" },
    ];

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
          children: filterButtons.map(button =>
            this.renderButton(button.text, button.filter)
          )
        }
      ]
    }
  }

  renderButton(text, filterType) {
    const isSelected = this.state.filterType === filterType;
    return {
      type: "div",
      attributes: {
        class: `flex-shrink-0 w-24 h-7 ${isSelected ? "bg-blue-700" : "bg-blue-500"} text-white rounded-xl`,
      },
      children: [
        {
          type: "button",
          attributes: { class: "w-full h-full font-texte" },
          events: {
            click: () => this.setFilterType(filterType),
          },
          children: [text],
        },
      ],
    };
  }

  renderSpots () {
    if (!this.state.spots || this.state.spots.length === 0) {
      return {
        type: "div",
        attributes: {
          class: "text-center mt-8 font-texte",
        },
        children: ["Aucun spot trouvé."]
      };
    }

    return {
      type: "div",
      attributes: {
        class: "flex flex-wrap justify-center"
      },
      children: this.state.spots.map(spot => ({
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
                  class: "font-bold text-center my-[10px] font-texte"
                },
                children: [spot.name]
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
                      src: spot.logoUrl,
                      alt: spot.name,
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
                        children: [spot.address]
                      },
                      {
                        type: "div",
                        attributes: {
                          class: "flex justify-center items-center space-x-2 mt-[10px]"
                        },
                        children: spot.type.map(type => ({
                          type: "img",
                          attributes: {
                            src: type.logoUrl,
                            alt: type.name,
                            class: "w-[30px] h-[30px]"
                          }
                        }))
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
                          class: "font-texte  bg-[#F0282D] text-[#FFB114] px-4 py-2 rounded-full cursor-pointer"
                        },
                        events: {
                          click: () => {
                            window.location.href = `/spot?id=${spot.id}`;
                          }
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
                        children: this.renderStars(spot.rating)
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }))
    }    
  }

  renderStars(rating) {
    let children = [];

    for (let i = 1; i <= 5; i++) {
      children.push({
        type: "img",
        attributes: {
          class: "w-[18px] h-[18px]",
          src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/"+(rating >= i ? "full_star" : "empty_star")+".svg?alt=media&token=cd6484b6-975d-4956-adb3-d88b19c63b40",
        },
      });
    }

    return children;
  }
}

export default Spots;
