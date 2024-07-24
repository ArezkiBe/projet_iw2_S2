import { Component } from "../core/MiniReact.js";
import Table from "../components/Table.js";
import BrowserLink from "../components/BrowserLink.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";





class Home extends Component{


  constructor(props) {
    super();
    this.data = props.data;
    this.mainPageData = this.data.getMainPage();
    this.days = [];
    this.spots = [];
    this.sponsors = [];
    this.sports = [];
    this.selectedDay = 0;

    this.initSports();
    this.initSponsors();
    this.initDays();
    this.initSpots();

  }

  initSports() {
    const sports = this.data.getSports();
    this.sports = sports;
  }

  initSponsors() {
    const sponsors = this.mainPageData.sponsors.map(sponsorId => this.data.getSponsors().find(s => s.id === sponsorId));
    this.sponsors = sponsors;
  }

  initDays() {
    let now = new Date();
    let tomorrow = new Date().addDays(1);
    let afterTomorrow = new Date().addDays(2);
    const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const months = ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Jui', 'Jui', 'Août', 'Sept', 'Oct', 'Nov', 'Dec'];
    
    
    this.days = [
      {
        day: days[ now.getDay() ],
        date: now.getDate(),
        month: months[ now.getMonth() ]
      },
      {
        day: days[ tomorrow.getDay() ],
        date: tomorrow.getDate(),
        month: months[ tomorrow.getMonth() ]
      },
      {
        day: days[ afterTomorrow.getDay() ],
        date: afterTomorrow.getDate(),
        month: months[ afterTomorrow.getMonth() ]
      },
    ]
  }

  initSpots() {
    let spots = this.data.getSpots();
    let events = this.data.getEvents();


    const getDateStr = (offset) => {
      const date = new Date();
      date.setDate(date.getDate() + offset);
      return date.toISOString().split('T')[0];
    };

    const today = getDateStr(0);
    const tomorrow = getDateStr(1);
    const dayAfterTomorrow = getDateStr(2);

    const isEventOnDate = (event, date) => {
      return new Date(event.schedule).toISOString().split('T')[0] === date;
    };

    const getSpotsForDate = (date) => {
      const spotIdsWithEventsToday = new Set();

      events.forEach(event => {
        if (isEventOnDate(event, date)) {
          spots.forEach(spot => {
            if (spot.events.includes(event.id)) {
              spotIdsWithEventsToday.add(spot.id);
            }
          });
        }
      });

      const filteredSpots = spots.filter(spot => spotIdsWithEventsToday.has(spot.id));

      return filteredSpots
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
    };

    const topSpotsToday = getSpotsForDate(today);
    const topSpotsTomorrow = getSpotsForDate(tomorrow);
    const topSpotsDayAfterTomorrow = getSpotsForDate(dayAfterTomorrow);

    this.spots = [topSpotsToday, topSpotsTomorrow, topSpotsDayAfterTomorrow]
  }

  setDay (position) {
    if (this.selectedDay !== position) {
      this.selectedDay = position
    } else {
      return;
    }

    this.updateCalendar()
  }

  updateCalendar() {
    const element = this.renderCalendar();
    const secondElement = this.renderPodium();
    let update = new CustomEvent("updateDOM", {
      detail: { id: "calendar", element: element },
    });

    let updatePodium = new CustomEvent("updateDOM", {
      detail: { id: "podium", element: secondElement },
    });

    window.dispatchEvent(update);
    window.dispatchEvent(updatePodium);
  }

  render() {
    return  {
      type: "div",
      children: [
        {
          type: Banner,
          props: {
            bannerSrc: this.mainPageData.bannerUrl,
            logoSrc: "https://picsum.photos/300",
            showLogo: true,
          }
        },
        {
          type :"div",
          attributes : {
            class: "mt-[7.188rem] flex justify-center items-center text-center px-[1.813rem] font-texte lg:text-[35px]"
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
                class: "mt-[3rem] text-center font-bold text-[2.5rem] md:text-[3.125rem] font-title"
              },
              children: ["Prochainement"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center items-center my-[2.5rem]"
              },
              children: [
                this.renderCalendar(),
              ]
            },
            this.renderPodium(),            
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
              children: this.sports.map(sport => this.renderSport(sport)),
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
                class: "text-[40px] font-bold"
              },
              children: ["Sponsors"]
            },
            {
              type: "div",
              attributes: {
                class: "grid grid-cols-2 gap-x-[80px] gap-y-[24px] mt-[24px]",
              },
              children: this.sponsors.map(sponsor => this.renderCollaborator(sponsor.logoUrl)),
            },
          ]
        },
        {
          type: Footer,
        }
      ],
    }
  }


  renderSport(sport) {
    return {
      type: "img",
      attributes: {
        src: sport.logoUrl,
        alt: ""
      }
    }
  }

  renderCalendar() {
    return {
      type: "div",
      attributes: {
        class: "flex space-x-6",
        id: "calendar"
      },
      children: [
        this.renderCalendarDay(this.days[0].day, this.days[0].date.toString(), this.days[0].month, 0),
        this.renderCalendarDay(this.days[1].day, this.days[1].date.toString(), this.days[1].month, 1),
        this.renderCalendarDay(this.days[2].day, this.days[2].date.toString(), this.days[2].month, 2),
      ],
    }
  }

  renderCalendarDay(weekDay, day, Month, position) {
    return {
      type: "div",
      attributes: {
        class: "flex flex-col items-center justify-center w-[5.625rem] h-[3.75rem] rounded-md " + (this.selectedDay === position ? "bg-[#F79E1B]" : "bg-[#DBC9C9]"),
      },
      events: {
        click: [function () {
          this.setDay(position);
        }.bind(this)],
      },
      children: [
        {
          type: "span",
          attributes: {
            class: "text-sm font-texte"
          },
          children: [weekDay]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm font-texte"
          },
          children: [day]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm font-texte"
          },
          children: [Month]
        }
      ]
    }
  }

  renderPodium() {
    let spot1 = this.spots[this.selectedDay][0];
    let spot2 = this.spots[this.selectedDay][1];
    let spot3 = this.spots[this.selectedDay][2];
    return {
      type: "div",
      attributes: {
        class: "flex flex-col justify-center items-center",
        id: "podium"
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
                            alt: spot2.name
                          }
                        }
                      ]
                    }
                  ]
                },
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
                            alt: spot1.name
                          }
                        }
                      ]
                    }
                  ]
                },
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
                            alt: spot3.name
                          }
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          type: "div",
          attributes: {
            class: "flex items-center space-x-4"
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "flex items-center justify-center text-sm w-[116px] font-texte text-center"
              },
              children: [spot2.name]
            },
            {
              type: "div",
              attributes: {
                class: "flex items-center justify-center text-sm w-[116px] font-texte text-center"
              },
              children: [spot1.name]
            },
            {
              type: "div",
              attributes: {
                class: "flex items-center justify-center text-sm w-[116px] font-texte text-center"
              },
              children: [spot3.name]
            }
          ]
        }
      ]
    }
  }

  renderCollaborator(logoSrc) {
    return {
      type: "div",
      attributes: {
        class: "flex flex-col items-center justify-center",
      },
      children: [
        {
          type: "img",
          attributes: {
            src: logoSrc,
            class: "w-[100px]",
          },
        },
      ],
    };
  }
}


export default Home;