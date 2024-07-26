import { Component } from "../core/MiniReact.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

class Calendrier extends Component {
  constructor(data) {
    super();
    this.data = data;
  }

  renderCalendarDay(day, date, isSelected = false) {
    const additionalClasses = isSelected ? "bg-black text-white" : "bg-white text-black";
    return {
      type: "div",
      attributes: {
        class: `flex flex-col items-center justify-center w-[5.625rem] h-[3.75rem] rounded-md font-bold text-sm ${additionalClasses}`,
      },
      children: [
        { type: "span", children: [day] }, // Abbreviated day of the week
        { type: "span", children: [date] }, // Date number
      ],
    };
  }

  renderSportEvent(event) {
    return {
      type: "section",
      attributes: {
        class:
          "flex gap-5 justify-between px-11 py-3.5 mt-4 w-full text-base font-bold text-center text-black border-t border-zinc-300 max-w-[364px]",
      },
      children: [
        {
          type: "img",
          attributes: {
            src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/bronze_medal.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662", // Assuming you have icon URLs in your event data
            alt: event.name,
            class: "shrink-0 aspect-square fill-black w-[50px]",
          },
        },
        {
          type: "p",
          attributes: { class: "my-auto" },
          children: [event.name],
        },
      ],
    };
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

  render() {
    const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const currentDate = new Date(); // Get the current date for highlighting

    return {
      type: "div",
      children: [
        { type: Navbar },
        {
          type: Banner,
          props: {
            bannerSrc: "https://picsum.photos/900/600", // Replace with actual banner URL
            showSearchBar: false,
            title: "CALENDRIER OLYMPIQUE",
            titleStyle: "text-2xl font-bold mt-4 text-center text-black",
          },
        },
        {
          type: "nav",
          attributes: {
            class: "flex gap-2.5 mt-11 text-xs font-bold leading-3 text-center"
          },
          children: [
            {
              type: "button",
              attributes: {
                class: "px-9 py-3.5 text-white whitespace-nowrap bg-black border border-black border-solid rounded-[30px]"
              },
              children: ["Calendrier"]
            },
            {
              type: "button",
              attributes: {
                class: "p-3.5 text-black border border-black border-solid bg-zinc-300 bg-opacity-0 rounded-[30px]"
              },
              children: ["Calendrier journalier"]
            }
          ]
        },
        // {
        //   type: "div",
        //   attributes: {
        //     class: "flex self-stretch px-3 py-0.5 mt-4 text-base leading-6 whitespace-nowrap bg-white text-zinc-950",
        //   },
        //   children: daysOfWeek.map((day) => {
        //     const isToday = day === daysOfWeek[currentDate.getDay()];
        //     return this.renderCalendarDay(day, currentDate.getDate(), isToday);
        //   }),
        // },

        // {
        //   type: "section", // Wrap events in a section
        //   attributes: { class: "mt-8" },
        //   children: this.data.getSportEvents().map(this.renderSportEvent),
        // },

        { type: Footer },
      ],
    };
  }
}

export default Calendrier;
