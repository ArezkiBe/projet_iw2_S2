import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";

class Calendar extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const selectedDay = today.getDate();
    const selectedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;

    this.state = {
      today: selectedDay,
      selectedDay,
      currentMonth,
      currentYear,
      events: this.props.data.getEvents(),
      sports: {},
      selectedDate,
    };

    this.initializeSports();
  }

  initializeSports() {
    const { events } = this.state;
    const sports = {};

    events.forEach(event => {
      const eventDate = new Date(event.schedule).toISOString().split('T')[0];
      if (!sports[eventDate]) {
        sports[eventDate] = [];
      }
      const sport = this.props.data.getSports().find(s => s.id === event.sport);
      if (sport) {
        if (!sports[eventDate].some(s => s.id === sport.id)) {
          sports[eventDate].push({
            id: sport.id,
            name: sport.name,
            logoUrl: sport.logoUrl
          });
        }
      }
    });

    this.setState({ sports });
  }

  setDay(dateStr, day) {
    this.setState({ selectedDay: day, selectedDate: dateStr }, () => this.updateDay());
  }

  setState(newState, callback) {
    this.state = { ...this.state, ...newState };
    if (callback) callback();
  }

  changeMonth(direction) {
    let { currentMonth, currentYear } = this.state;
    currentMonth += direction;

    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear -= 1;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear += 1;
    }

    this.setState({ currentMonth, currentYear, selectedDay: null }, () => this.updateCalendar());
  }

  updateDay() {
    const sportsElement = this.renderSports();
    let update = new CustomEvent("updateDOM", {
      detail: { id: "sports", element: sportsElement },
    });
    window.dispatchEvent(update);
    this.updateCalendar();
  }

  updateCalendar() {
    const calendarElement = this.renderCalendar();
    let update = new CustomEvent("updateDOM", {
      detail: { id: "calendar", element: calendarElement },
    });
    window.dispatchEvent(update);
  }

  renderCalendarDays() {
    const { currentMonth, currentYear, selectedDay, today } = this.state;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const days = [];

    // Adding empty slots for days of previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({
        type: "div",
        attributes: {
          class: "p-2 cursor-pointer calendar-day",
        },
        children: [""],
      });
    }

    // Adding actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === selectedDay;
      const isToday = i === today && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      days.push({
        type: "div",
        attributes: {
          class: `p-2 cursor-pointer calendar-day ${isSelected ? "relative" : ""} ${!isSelected && isToday ? "bg-gray-200" : ""}`,
          "data-day": dateStr,
        },
        events: {
          click: () => this.setDay(dateStr, i),
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
                  class: "w-full h-full rounded-full bg-[#FFB114] flex items-center justify-center",
                },
                children: [
                  {
                    type: "span",
                    children: [i.toString()],
                  },
                ],
              } : {
                type: "span",
                attributes: {
                  class: `${isWeekend ? "text-red-500" : ""}`,
                },
                children: [i.toString()],
              },
            ],
          },
        ],
      });
    }

    return days;
  }

  renderSports() {
    const { selectedDate, sports } = this.state;
    if (!selectedDate) return { type: "div", attributes: { id: "sports" } };

    const sportsForDay = sports[selectedDate] || [];
    return {
      type: "div",
      attributes: {
        class: "mt-[24px] mx-[14px] font-texte",
        id: "sports",
      },
      children: sportsForDay.map(sport => this.renderSport(sport.name, sport.logoUrl, sport.id)),
    };
  }

  renderCalendar() {
    const { currentMonth, currentYear } = this.state;
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    return {
      type: "div",
      attributes: {
        class: "text-center mt-8",
        id: "calendar",
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "text-lg font-semibold mb-2 flex items-center justify-center",
          },
          children: [
            {
              type: "button",
              attributes: {
                class: "px-2",
              },
              events: {
                click: () => this.changeMonth(-1),
              },
              children: ["<"],
            },
            {
              type: "span",
              children: [`${monthNames[currentMonth]} ${currentYear}`],
            },
            {
              type: "button",
              attributes: {
                class: "px-2",
              },
              events: {
                click: () => this.changeMonth(1),
              },
              children: [">"],
            },
          ],
        },
        {
          type: "div",
          attributes: {
            class: "grid grid-cols-7 gap-2",
          },
          children: [
            ...["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => ({
              type: "div",
              attributes: {
                class: `text-${day === "Sun" || day === "Sat" ? "red" : "black"}-500`,
              },
              children: [day],
            })),
            ...this.renderCalendarDays(),
          ],
        },
      ],
    };
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
            class: "text-center",
          },
          children: [
            {
              type: "h1",
              attributes: {
                class: "text-[16px] font-regular my-[40px] lg:mt-[102.24px] text-center lg:font-bold lg:text-[56.8px] font-title ",
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
                    class:"text-[11px] font-texte lg:text-[35.5px] bg-black text-white px-[35px] py-[12px] rounded-[30px] w-[116px] lg:w-[342.22px] h-[35px] lg:h-[61.77px] flex items-center justify-center",
                  },
                  children: ["CALENDRIER"],
                },
                {
                  type: "button",
                  attributes: {
                    class: "text-[11px] lg:text-[35.5px] bg-black text-white px-[35px] py-[12px] rounded-[30px] w-[116px] lg:w-[500px] h-[35px] lg:h-[61.77px] flex items-center justify-center",
                  },
                  events: {
                    click: () => {
                      window.location.href = `/daily`;
                    }
                  },
                  events: {
                    click: () => {
                      window.location.href = `/daily`;
                    }
                  },
                  children: ["CALENDRIER JOURNALIER"],
                },
              ],
            },
          ],
        },
        this.renderCalendar(),
        this.renderSports(),
        { type: Footer },
      ],
    };
  }

  renderSport(name, logoUrl, id) {
    const { sports } = this.state;
    return {
      type: "div",
      attributes: {
        class: "flex items-center space-x-[96px] border-t",
      },
      events: {
        click: () => {
          window.location.href = `/jeu?id=${[id]}`;
        }
      },
      children: [
        {
          type: "img",
          attributes: {
            src: logoUrl,
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

//1350PX 937.2px
//1200PX 852px
//504PX 357.84px
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