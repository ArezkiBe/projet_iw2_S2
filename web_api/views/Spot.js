import { Component } from "../core/MiniReact.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

class Spot extends Component {
  constructor(props) {
    super(props);
    this.sport = null;
    this.data = props.data;

    const spotId = this.props.id;
    const spot = this.data.getSpots().find((s) => s.id === spotId);
    this.spot = spot;

    this.days = [];
    this.selectedDay = 0;
    this.events = [];

    this.initDays();
    this.initEvents();

    // const sponsors = sport.sponsors.map(sponsorId => this.data.getSponsors().find(s => s.id === sponsorId));
    // this.state.sponsors = sponsors;
  }

  initDays() {
    let now = new Date();
    let tomorrow = new Date().addDays(1);
    let afterTomorrow = new Date().addDays(2);
    const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const months = [
      "Jan",
      "Fev",
      "Mars",
      "Avr",
      "Mai",
      "Jui",
      "Jui",
      "Août",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    this.days = [
      {
        day: days[now.getDay()],
        date: now.getDate(),
        month: months[now.getMonth()],
      },
      {
        day: days[tomorrow.getDay()],
        date: tomorrow.getDate(),
        month: months[tomorrow.getMonth()],
      },
      {
        day: days[afterTomorrow.getDay()],
        date: afterTomorrow.getDate(),
        month: months[afterTomorrow.getMonth()],
      },
    ];
  }

  initEvents() {
    let spot = this.spot;
    let events = this.data.getEvents();

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const afterTomorrow = new Date(today);
    afterTomorrow.setDate(today.getDate() + 2);

    const formatDate = (date) => date.toISOString().split("T")[0]; // Format YYYY-MM-DD

    const spotEvents = events.filter((event) => spot.events.includes(event.id));

    const eventsByDate = {
      today: [],
      tomorrow: [],
      afterTomorrow: [],
    };

    spotEvents.forEach((event) => {
      const eventDate = new Date(event.schedule);
      const eventDateStr = formatDate(eventDate);

      if (formatDate(today) === eventDateStr) {
        eventsByDate.today.push(event);
      } else if (formatDate(tomorrow) === eventDateStr) {
        eventsByDate.tomorrow.push(event);
      } else if (formatDate(afterTomorrow) === eventDateStr) {
        eventsByDate.afterTomorrow.push(event);
      }
    });

    const groupBySport = (events) => {
      const grouped = {};
      events.forEach((event) => {
        if (!grouped[event.sport]) {
          grouped[event.sport] = [];
        }
        grouped[event.sport].push(event);
      });
      return Object.values(grouped);
    };

    this.events = [
      groupBySport(eventsByDate.today),
      groupBySport(eventsByDate.tomorrow),
      groupBySport(eventsByDate.afterTomorrow),
    ];
  }

  setDay(position) {
    if (this.selectedDay !== position) {
      this.selectedDay = position;
    } else {
      return;
    }

    this.updateCalendar();
  }

  updateCalendar() {
    const element = this.renderCalendar();
    const element2 = this.renderEvents();
    let updateCalendar = new CustomEvent("updateDOM", {
      detail: { id: "calendar", element: element },
    });
    let updateEvents = new CustomEvent("updateDOM", {
      detail: { id: "events", element: element2 },
    });

    window.dispatchEvent(updateCalendar);
    window.dispatchEvent(updateEvents);
  }

  render() {
    return {
      type: "div",
      children: [
        { type: Navbar },
        {
          type: Banner,
          props: {
            bannerSrc: "https://picsum.photos/900/600",
            showSearchBar: false,
            title: "JEUX",
            titleStyle: "text-3xl mt-10",
          },
        },

        {
          type: "div",
          attributes: {
            class: "container mx-auto text-center",
          },
          children: [
            {
              type: "div",
              attributes: {
                class:
                  "text-4xl lg:text-[56.8px] font-bold mt-[2.5rem] lg:mt-[56.8px] ml-[6.31] mr-[6.37]",
              },
              children: [this.spot.name],
            },
            {
              type: "div",
              attributes: {
                class: "mt-2",
              },
            },
            {
              type: "div",
              attributes: { class: "flex justify-center mt-[2rem] lg:mt-[56.8px]" },
              children: this.renderStars(),
            },
            {
              type: "p",
              attributes: {
                class: "mt-[2rem] lg:mt-[56.8px] px-[1.25rem] lg:px-[73.84px] text-center lg:text-[35.5px]",
              },
              children: [this.spot.description],
            },

            {
              type: "div",
              attributes: {
                class:
                  "flex justify-around mt-[1.25rem] lg:mt-[102.24px] text-center text-base lg:text-[35.5px]",
              },
              children: [
                { type: "span", children: ["Intérieur"] },
                { type: "span", children: ["Nourriture/Boissons"] },
                { type: "span", children: ["50 Pers Max"] },
              ],
            },

            {
              type: "div",
              attributes: {
                class:
                  "text-[2.25rem] lg:text-[56.8px] font-semibold mt-[2rem] lg:mt-[102.24px] text-center",
              },
              children: ["Sports retransmis"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center mt-[1rem] lg:mt-[28.4px]",
              },
              children: [
                {
                  type: "div",
                  attributes: {
                    class: "flex space-x-6 lg:space-x-20",
                  },
                  children: [this.renderCalendar()],
                },
              ],
            },
            this.renderEvents(),
          ],
        },

        { type: Footer },
      ],
    };
  }

  renderCalendar() {
    return {
      type: "div",
      attributes: {
        class: "flex space-x-6",
        id: "calendar",
      },
      children: [
        this.renderCalendarDay(
          this.days[0].day,
          this.days[0].date.toString(),
          this.days[0].month,
          0
        ),
        this.renderCalendarDay(
          this.days[1].day,
          this.days[1].date.toString(),
          this.days[1].month,
          1
        ),
        this.renderCalendarDay(
          this.days[2].day,
          this.days[2].date.toString(),
          this.days[2].month,
          2
        ),
      ],
    };
  }

  renderCalendarDay(weekDay, day, Month, position) {
    return {
      type: "div",
      attributes: {
        class:
          "flex flex-col items-center justify-around w-[5.625rem] lg:w-[272.6px] h-[3.75rem] lg:h-[106.5px] rounded-md lg:rounded-md " +
          (this.selectedDay === position
            ? "bg-[#F79E1B] lg:bg-[#F79E1B]"
            : "bg-[#DBC9C9] lg:bg-[#DBC9C9]") +
          (this.selectedDay === position
            ? "lg:bg-[#F79E1B]"
            : "lg:bg-[#DBC9C9]"),
      },
      events: {
        click: [
          function () {
            this.setDay(position);
          }.bind(this),
        ],
      },
      children: [
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte",
          },
          children: [weekDay],
        },
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte",
          },
          children: [day],
        },
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte",
          },
          children: [Month],
        },
      ],
    };
  }

  renderEvents() {
    return {
      type: "div",
      attributes: {
        class:
          "mt-[2rem] flex flex-col justify-center items-center mb-[2.5rem] px-[12px]",
        id: "events",
      },
      children: this.events[this.selectedDay].map((event) =>
        this.renderSportEvent(event)
      ),
    };
  }

  renderSportEvent(events) {
    if (events.length === 0) {
      return "Il n'y a rien à cette date";
    }
    const sport = this.data.getSports().find(s => s.id === events[0].sport);

    const renderCategories = (events) => {
      let result = [];
      for (let i = 0; i < events.length; i++) {
        result.push({
          type: "div",
          attributes: { class: "text-xs whitespace-pre-line pl-[1.81rem] lg:mt-[35.5px] lg:text-[35.5px]" },
          children: this.formatEventTimes(events[i]),
        });
      }

      return result;
    };

    return {
      type: "div",
      attributes: {
        class:
          "flex items-center p-2 mt-[2rem] bg-[#FFF5F5] border border-black rounded-[1.87rem] w-[22.62rem] lg:w-[852px] h-[6.25rem] lg:h-[286.13px] lg:justify-around",
          //flex items-center p-2 mt-[2rem] bg-[#FFF5F5] border border-black rounded-[1.87rem] w-[22.62rem] h-[6.25rem]
      },
      children: [
        {
          type: "img",
          attributes: {
            src: sport.logoUrl,
            alt: sport.name,
            class: "w-[5rem] h-[5rem] ml-[2rem] lg:w-[213.71px] lg:h-[235.72px]",
          },
        },
        {
          type: "div",
          children: [
            {
              type: "div",
              attributes: { class: "font-bold text-sm p-[0.625rem lg:text-[45.44px]" },
              children: [sport.name],
            },
            ...renderCategories(events),
          ],
        },
      ],
    };
  }

  formatEventTimes(events) {
    const timeCategoryMap = {};

    const startTime = new Date(events.start_time);
    const endTime = new Date(events.end_time);

    const startHour = startTime.getUTCHours();
    const startMinute = startTime.getUTCMinutes();
    const endHour = endTime.getUTCHours();
    const endMinute = endTime.getUTCMinutes();

    const startFormatted = `${startHour}h${
      startMinute ? "-" + startMinute : ""
    }`;
    const endFormatted = `${endHour}h${endMinute ? "-" + endMinute : ""}`;

    const timeInterval = `${startFormatted}-${endFormatted}`;

    const categories = events.categories.join(", ");

    if (!timeCategoryMap[timeInterval]) {
      timeCategoryMap[timeInterval] = [];
    }
    timeCategoryMap[timeInterval].push(categories);

    const result = Object.entries(timeCategoryMap).map(
      ([timeInterval, categoriesList]) => {
        const uniqueCategories = [...new Set(categoriesList.flat())]; // Éliminer les doublons
        return `${timeInterval}: ${uniqueCategories.join(", ")}`;
      }
    );

    return result;
  }

  renderStars() {
    let children = [];

    for (let i = 1; i <= 5; i++) {
      children.push({
        type: "img",
        attributes: {
          class: "lg:w-[43.31px] lg:h-[43.31px]",
          src:
            "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/" +
            (this.spot.rating >= i ? "full_star" : "empty_star") +
            ".svg?alt=media&token=cd6484b6-975d-4956-adb3-d88b19c63b40",
        },
      });
    }

    return children;
  }

  renderSocialIcon(icon) {
    return {
      type: "img",
      attributes: {
        src: icon,
        alt: "Social Icon",
        class: "w-6 h-6 mx-2",
      },
    };
  }
}

export default Spot;
