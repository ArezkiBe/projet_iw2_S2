import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
      sports: {
        14: [
          { name: "Basketball 3x3", iconSrc: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=b8fd80aa-c9a9-42f7-b682-01d6b88e3eda" },
          { name: "Badminton", iconSrc: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=ffa2e42f-136e-4e56-b512-938eeeddfc7c" },
          { name: "Tir à l'arc", iconSrc: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/tirArc.svg?alt=media&token=ac02434a-8767-420a-b663-57b4ea853ffd" },
          { name: "Course BMX", iconSrc: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/bmx.svg?alt=media&token=ac02434a-8767-420a-b663-57b4ea853ffd" },
        ],
        // Ajoutez plus de jours et de sports ici
      },
    };
  }

  setDay(day) {
    this.state.selectedDay = day;
    this.updateDay();
  }

  updateDay() {
    const sportsElement = this.renderSports();
    if (!sportsElement || sportsElement==="") return;
    let update = new CustomEvent("updateDOM", {
      detail: { id: "sports", element: sportsElement },
    });
    console.log(update);
    window.dispatchEvent(update);
  }

  renderChildren(sportsForDay) {  
    let result = [];
    for (const sport of sportsForDay) {
      result.push(this.renderSport(sport.name, sport.iconSrc));
    }
    console.log(result);
    return result;
  }

  renderSports() {
    const { selectedDay, sports } = this.state;
    if (!selectedDay) return {type: "div", attributes:{id: "sports"}};

    const sportsForDay = sports[selectedDay] || [];
    if (sportsForDay.length===0) return {type: "div", attributes:{id: "sports"}};

    let result = {
      type: "div",
      attributes: {
        class: "mt-[24px] mx-[14px]",
        id: "sports",
      },
      children:
        this.renderChildren(sportsForDay),
    };
    return result;
  }

  render() {
    const { selectedDay } = this.state;
  
    return {
      type: "div",
      children: [
        //new Navbar().render(),
        {
          type: Banner,
          props: {
            bannerSrc: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/bgCalendar.svg?alt=media&token=f4f06e0f-1ce2-491f-a4d8-2c4ea12ddeed",
            showLogo: false,
          }
        },
        {
          type: "div",
          attributes: {
            class: "text-center",
          },
          children: [
            {
              type: "h1",
              attributes: {
                class: "text-[16px] font-regular my-[40px] lg:mt-[102.24px] text-center lg:font-bold lg:text-[56.8px]",
              },
              children: ["CALENDRIER OLYMPIQUE"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center space-x-[16px] lg:space-x-[42.6px] lg:mt-[102.24px]",
              },
              children: [
                {
                  type: "button",
                  attributes: {
                    class:"text-[11px] lg:text-[35.5px] bg-black text-white px-[35px] py-[12px] rounded-[30px] w-[116px] lg:w-[342.22px] h-[35px] lg:h-[61.77px] flex items-center justify-center",
                  },
                  children: ["CALENDRIER"],
                },
                {
                  type: "button",
                  attributes: {
                    class: "text-[11px] lg:text-[35.5px] bg-black text-white px-[35px] py-[12px] rounded-[30px] w-[116px] lg:w-[500px] h-[35px] lg:h-[61.77px] flex items-center justify-center",
                  },
                  children: ["CALENDRIER JOURNALIER"],
                },
              ],
            },
          ],
        },
        {
          type: "div",
          attributes: {
            class: "text-center mt-8 lg:mt-[113.6px]",
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "text-lg lg:text-[56.8px] font-semibold mb-2",
              },
              children: ["JUILLET 2024"],
            },
            {
              type: "div",
              attributes: {
                class: "grid grid-cols-7 gap-2 lg:mt-[56.8px]",
              },
              children: [
                ...["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => ({
                  type: "div",
                  attributes: {
                    class: "text-red-500 lg:text-[56.8px]",
                  },
                  children: [day],
                })),
                ...Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1;
                  const isSelected = day === selectedDay;
                  return {
                    type: "div",
                    attributes: {
                      class: `p-2 cursor-pointer calendar-day lg:mt-[56.8px] lg:mb-[56.8px] lg:text-[56.8px] ${isSelected ? "relative" : ""}`,
                      "data-day": day,
                    },
                    events: {
                      click: () => this.setDay(day),
                    },
                    children: [
                      {
                        type: "div",
                        attributes: {
                          class: `${isSelected ? "absolute inset-0 w-full h-full flex items-center justify-center" : ""}`,
                        },
                        children: [
                          isSelected ? {
                            type: "div",
                            attributes: {
                              class: "w-full h-full rounded-full border-2 border-orange-500 flex items-center justify-center",
                            },
                            children: [
                              {
                                type: "span",
                                children: [day.toString()],
                              },
                            ],
                          } : {
                            type: "span",
                            children: [day.toString()],
                          },
                        ],
                      },
                    ],
                  };
                }),
              ],
            },
          ],
        },
        this.renderSports(),
        new Footer().render(),
      ],
    };
  }
  

  renderSport(name, iconSrc) {
    return {
      type: "div",
      attributes: {
        class: "flex items-center space-x-[96px] border-t",
      },
      children: [
        {
          type: "img",
          attributes: {
            src: iconSrc,
            class: "w-[50px] h-[50px] my-[12px] ml-[42px]",
            alt: name,
          },
        },
        {
          type: "span",
          attributes: {
            class: "text-[16px] font-regular",
          },
          children: [name],
        },
      ],
    };
  }
}

export default Calendar;


//1200PX 852px
//403PX 286.13px
//332PX 235.72px
//301PX 213.71px
//265PX 188.15px
//212PX 150.52px
//179PX 127.09px
//160PX 113.6px
//144PX 102.24px
//136PX 96.56px
//108PX 76.68px
//104 73.84px
//100PX 71px
//80PX 56.8px
//76PX 53.96px
//64PX 45.44px
//60PX 42.6px
//56PX 39.76px
//50PX 35.5px
//40PX 28.4px
//24PX 17.04px