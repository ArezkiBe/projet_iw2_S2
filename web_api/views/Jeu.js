import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";

class Jeu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: null,
    };
    this.data = props.data;

    const sportId = this.props.id;
    const sport = this.data.getSports().find(s => s.id === sportId);
    this.state.sport = sport;

    const sponsors = sport.sponsors.map(sponsorId => this.data.getSponsors().find(s => s.id === sponsorId));
    this.state.sponsors = sponsors;

    this.days = []
    this.events =[]
    this.selectedDay = 0;
    this.initDays();
    this.initEvents();
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
        month: months[ now.getMonth() ],
        fullDate: now.toISOString().split('T')[0]
      },
      {
        day: days[ tomorrow.getDay() ],
        date: tomorrow.getDate(),
        month: months[ tomorrow.getMonth() ],
        fullDate: tomorrow.toISOString().split('T')[0]
      },
      {
        day: days[ afterTomorrow.getDay() ],
        date: afterTomorrow.getDate(),
        month: months[ afterTomorrow.getMonth() ],
        fullDate: afterTomorrow.toISOString().split('T')[0]
      },
    ]
  }


  initEvents() {
    let events = this.data.getEvents();
    events = events.filter(event => event.sport === this.state.sport.id);

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

    this.events = [ today, tomorrow, dayAfterTomorrow ].map(date => {
      return events.filter(event => isEventOnDate(event, date));
    });
  }


  getCountryInfo(countryNames) {
    return countryNames.map(countryName => this.data.getCountries().find(country => country.name === countryName));
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
    const eventsElement = this.renderEvents();

    let update = new CustomEvent("updateDOM", {
      detail: { id: "calendar", element: element },
    });
    let eventsUpdate = new CustomEvent("updateDOM", {
      detail: { id: "events", element: eventsElement },
    });

    window.dispatchEvent(update);
    window.dispatchEvent(eventsUpdate);
  }

  render() {
    return {
      type: "div",
      children: [
        //new Navbar().render(),
        {
          type: Banner,
          props: {
            bannerSrc: this.state.sport.bannerUrl,
            logoSrc: this.state.sport.logoUrl,
            showLogo: true,
          }
        },
        {
          type: "div",
          children: [
            {
              type: "div",
              attributes: {
                class: "text-center",
              },
              children: [
                {
                  type: "h1",
                  attributes: {
                    class: "text-[40px] font-bold pb-[8px] mt-[107px] font-title",
                  },
                  children: [this.state.sport.name],
                },
                {
                  type: "div",
                  attributes: {
                    class: "mt-2",
                  },
                  children: this.state.sport.description.reduce((acc, text, index) => {
                    if (index > 0) {
                      acc.push({ type: "br" });
                    }
                    acc.push({ type: "span",attributes: {class: "flex justify-center items-center text-center px-[1.813rem] font-texte lg:text-[16px]",}, children: [text] });
                    return acc;
                  }, []),
                },
              ],
            },
            {
              type: "div",
              attributes: {
                class: "text-center mt-8",
              },
              children: [
                {
                  type: "h2",
                  attributes: {
                    class: "font-bold text-[40px] font-title",
                  },
                  children: ["Calendrier"],
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
                        children: [this.renderCalendar()],
                      },
                    ]
                  },
              ],
            },
            this.renderEvents(),
            {
              type: "div",
              attributes: {
                class: "text-center mt-8",
              },
              children: [
                {
                  type: "h2",
                  attributes: {
                    class: "font-bold pt-[8px] text-left pl-[32px] text-[40px] font-title",
                  },
                  children: ["Collaboration"],
                },
                {
                  type: "div",
                  attributes: {
                    class: "grid grid-cols-2 lg:grid-cols-3 gap-x-[80px] lg:gap-x-[56.8px] gap-y-[24px] px-[56px] pt-[16px] lg:pt-[56.8px] pb-[40px] lg:pb-[102.24px]",
                  },
                  children: this.state.sponsors.map(sponsor => this.renderCollaborator(sponsor.logoUrl)),
                },
              ],
            },
          ],
        },
        {
          type: Footer,
        }
      ],
    };
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

  renderEvents() {
    const events = this.events[this.selectedDay];
  
    if (!events || events.length === 0) {
      return {
        type: "div",
        attributes: {
          id: "events",
          class: "mt-8 justify-center px-[14px] font-texte text-[16px]",
        },
        children: [
          {
            type: "div",
            attributes: {
              class: "text-center",
            },
            children: "Aucun événement pour cette date.",
          },
        ],
      }
    }
    else {
      return{
        type: "div",
        attributes: {
          id: "events",
          class: "mt-8 justify-center px-[14px] font-texte text-[16px]",
        },
        children: events.map(event => this.renderEvent(event)),
      }
    }
  }
  

  

  renderEvent(event) {
    const countries = this.getCountryInfo(event.countries);
    const team1 = countries[0];
    const team2 = countries[1];
    const time = new Date(event.schedule).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const title = `${this.state.sport.name} - ${event.categories[0] || "groupe"}`;
    
    return this.renderMatch(time, title, team1.name, team1.flagUrl, team2.name, team2.flagUrl);
  }
  
  
  

  renderMatch(time, title, team1, team1Logo, team2, team2Logo) {
    return {
      type: "div",
      attributes: {
        class: "border rounded-lg mb-[24px] lg:mb-[56.6px] lg:w-[852px] lg:h-[360.68px] flex flex-col",
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "text-black-400 lg:text-[35.5px] pt-[16px] lg:pt-[39.76px] pl-[24px] lg:pl-[56.8px]",
          },
          children: [
            {
              type: "span",
              attributes: {
                class: "block", // Converti en bloc pour forcer l'alignement en haut
              },
              children: [time],
            },
          ],
        },
        {
          type: "h3",
          attributes: {
            class: "text-center font-semibold pb-[24px]", // Centre le texte avec flex-grow
          },
          children: [title],
        },
        {
          type: "div",
          attributes: {
            class: "flex justify-center lg:text-[35.5px] items-center space-x-[16px] pb-[32px] lg:space-x-[42.6px]",
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "flex items-center space-x-[16px]", 
              },
              children: [
                {
                  type: "span",
                  children: [team1],
                },
                {
                  type: "img",
                  attributes: {
                    src: team1Logo,
                    class: "w-[33px] lg:w-[76.68px] h-[24px] lg:h-[54.67px]",
                    alt: team1,
                  },
                },
              ],
            },
            {
              type: "span",
              children: ["—"],
            },
            {
              type: "div",
              attributes: {
                class: "flex items-center space-x-[16px]", // Espace entre l'image et le texte
              },
              children: [
                {
                  type: "img",
                  attributes: {
                    src: team2Logo,
                    class: "w-[33px] lg:w-[76.68px] h-[24px] lg:h-[54.67px] text-black-400",
                    alt: team2,
                  },
                },
                {
                  type: "span",
                  children: [team2],
                },
              ],
            },
          ],
        },
      ],
    };
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
            class: "w-[100px] lg:w-[142.71px] lg:h-[46.86px] lg:mt-[76.68px]",
          },
        },
      ],
    };
  }
}

export default Jeu;