import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";

class DailyCalendar extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      selectedDate: new Date().toISOString().split('T')[0],
      selectedSport: "All",
      events: [],
      sports: ["All", ...this.data.getSports().map(sport => sport.name)],
    };

    this.loadEvents();
  }

  loadEvents() {
    const selectedDate = this.state.selectedDate;
    const selectedSport = this.state.selectedSport;
    const events = this.data.getEvents().filter(event => {
      const eventDate = event.schedule.split('T')[0];
      const sportName = this.data.getSports().find(sport => sport.id === event.sport)?.name;
      return eventDate === selectedDate && (selectedSport === "All" || sportName === selectedSport);
    });

    this.setState({ events: events }, this.updateEvents.bind(this));
  }

  updateEvents() {
    const eventsElement = this.renderEvents();
    let update = new CustomEvent("updateDOM", {
      detail: { id: "events", element: eventsElement },
    });
    window.dispatchEvent(update);
  }

  handleDateChange(event) {
    this.setState({ selectedDate: event.target.value }, this.loadEvents.bind(this));
  }

  handleSportChange(event) {
    this.setState({ selectedSport: event.target.value }, this.loadEvents.bind(this));
  }

  setState(newState, callback) {
    this.state = { ...this.state, ...newState };
    if (callback) callback();
  }

  render() {
    return {
      type: "div",
      children: [
        { type: Navbar },
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
            class: "text-center mt-8",
          },
          children: [
            {
              type: "h1",
              attributes: {
                class: "text-[16px] font-regular my-[40px] font-title",
              },
              children: ["CALENDRIER JOURNALIER"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center space-x-[16px]",
              },
              children: [
                {
                  type: "button",
                  attributes: {
                    class: "text-[11px] font-texte border border-black rounded-[30px] w-[116px] h-[35px]",
                  },
                  children: ["CALENDRIER"],
                  events: {
                    click: () => window.location.href = "/calendar",
                  }
                },
                {
                  type: "button",
                  attributes: {
                    class: "text-[11px] px-2 font-texte bg-black text-white  rounded-[30px] w-[116px] h-[35px]",
                  },
                  children: ["CALENDRIER JOURNALIER"],
                },
              ],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center space-x-[16px] mt-4",
              },
              children: [
                {
                  type: "input",
                  attributes: {
                    type: "date",
                    value: this.state.selectedDate,
                    class: "border border-gray-300 rounded px-2 py-2",
                  },
                  events: {
                    change: this.handleDateChange.bind(this),
                  },
                },
                {
                  type: "select",
                  attributes: {
                    class: "border border-gray-300 rounded px-2 py-2",
                  },
                  events: {
                    change: this.handleSportChange.bind(this),
                  },
                  children: [
                    {
                      type: "option",
                      attributes: { value: "All" },
                      children: ["Filter by sport"],
                    },
                    ...this.state.sports.map(sport => ({
                      type: "option",
                      attributes: { value: sport },
                      children: [sport],
                    })),
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "div",
          attributes: {
            class: "mt-8 font-texte",
            id: "events",
          },
          children: [this.renderEvents()],
        },
        new Footer().render(),
      ],
    };
  }

  renderEvents() {
    const eventsForDay = this.state.events;
    if (eventsForDay.length === 0) {
      return {
        type: "div",
        attributes: { class: "text-center mt-4", id: "events" },
        children: ["Aucun événement pour cette date."],
      };
    }

    return {
      type: "div",
      attributes: { id: "events" },
      children: eventsForDay.map(event => this.renderEvent(event)),
    };
  }

  renderEvent(event) {
    const countries = this.getCountryInfo(event.countries);
    const team1 = countries[0];
    const team2 = countries[1];
    const time = new Date(event.schedule).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sport = this.data.getSports().find(s => s.id === event.sport);
    const title = `${sport.name} - ${sport.type}`;

    return this.renderMatch(time, title, team1.name, team1.flagUrl, team2.name, team2.flagUrl);
  }

  renderMatch(time, title, team1, team1Logo, team2, team2Logo) {
    return {
      type: "div",
      attributes: {
        class: "border rounded-lg mb-[24px] flex flex-col", // Espacement selon la règle des 8 et margin-bottom pour espacer les matchs
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "text-gray-600 pt-[16px] pl-[24px]",
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
            class: "flex justify-center items-center space-x-[16px] pb-[32px]", // Espace entre les équipes
          },
          children: [
            {
              type: "div",
              attributes: {
                class: "flex items-center space-x-[16px]", // Espace entre le texte et l'image
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
                    class: "w-[33px] h-[24px]",
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
                    class: "w-[33px] h-[24px]",
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

  getCountryInfo(countries) {
    return countries.map(country => this.data.getCountries().find(c => c.name === country));
  }
}

export default DailyCalendar;
