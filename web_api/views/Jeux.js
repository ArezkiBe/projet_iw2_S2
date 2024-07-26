import { Component } from "../core/MiniReact.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Jeux extends Component {
  constructor(props) {
    super();
    this.data = props.data;
    const sports = this.data.getSports();
    this.state = {
      sports: sports,
      filterType: "All",
    };
  }

  setFilterType(type) {
    if (this.state.filterType === type) {
      this.state.filterType = "All";
    } else {
      this.state.filterType = type;
    }
    this.updateFilteredSports();
  }

  updateFilteredSports() {
    const filterType = this.state.filterType;
    const allSports = this.data.getSports();
    let filteredSports;

    if (filterType === "All") {
      filteredSports = allSports;
    } else {
      filteredSports = allSports.filter(sport => sport.spot_type.includes(filterType));
    }

    this.state.sports = filteredSports;
    this.updateSports();
  }

  updateSports() {
    const element = this.renderSports();
    let update = new CustomEvent("updateDOM", {
      detail: { id: "sportsList", element: element },
    });
    window.dispatchEvent(update);
  }

  renderSports() {
    return {
      type: "div",
      attributes: {
        id: "sportsList",
        class:"flex flex-col items-center gap-6 mt-[1.5rem] mb-[40px] lg:mt-[102.24px]",
      },
      children:this.state.sports.map(sport => this.renderSport(sport)),
    };
  }

  renderSport(sport) {
    return {
      type: "div",
      attributes: {
        class:"flex justify-center w-[364px] lg:w-[852px] h-[155px] lg:h-[362.81px] border-[#D9D9D9] border-t",
      },
      children: [
        {
          type: "div",
          attributes: {
            class:"flex justify-center items-center w-1/2",
          },
          children: [
            {
              type: "img",
              attributes: {
                src: sport.logoUrl,
                class: "shrink-0 max-w-full aspect-square fill-black w-[100px] lg:w-[234.3px] h-[100px] lg:h-[234.3px]",
              },
            },
          ]
        },
        {
          type: "div",
          attributes: {
            class:"flex flex-col justify-around items-center w-1/2",
          },
          children: [
            {
              type: "h2",
              attributes: {
                class:"text-base font-bold text-left text-black lg:text-[45.44px] font-texte",
              },
              children: [sport.name],
            },
            {
              type: "img",
              attributes: {
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/Line.svg?alt=media&token=fe7f509b-e9de-455d-8fa5-6fc5da199119",
                class: "w-[8.125rem] lg:w-[381.27px]",
              },
              children: [],
            },
            {
              type: "button",
              attributes: {
                class:"w-[73px] lg:w-[273.71px] h-[26px] lg:h-[95.14px] px-[7px] text-sm lg:text-[35.5px] font-texte  bg-[#F0282D] rounded-2xl font-[760] text-[#FFB114]",
              },
              events: {
                click: () => {
                  window.location.href = `/jeu?id=${sport.id}`;
                }
              },
              children: ["DETAILS"],
            },
          ],
        },
      ],
    };
  }

  renderButton(text, filterType) {
    const isSelected = this.state.filterType === filterType;
    return {
      type: "div",
      attributes: {
        class:`bg-[#D9D9D9] rounded-[0.625rem] px-[10px] py-[4px] flex items-center justify-center lg:w-[248.5px] lg:h-[56.8px] font-texte ${isSelected ? "bg-[#F79E1B]" : ""}`,
      },
      children: [
        {
          type: "button",
          attributes: { class: "text-[#000000] lg:text-[35.5px] lg:px-[7.1px] font-texte" },
          events: {
            click: () => this.setFilterType(filterType)
          },
          children: [text],
        },
      ],
    };
  }

  render() {
    return {
      type: "section",
      attributes: {
        class: "",
      },
      children: [
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
              type: "h1",
              attributes: { class: "text-center font-bold text-[2.5rem] lg:text-[56.8px] lg:mt-[102.24px] font-title" },
              children: ["Jeux"],
            },
            {
              type: "p",
              attributes: {
                class:"mt-[2rem] lg:mt-[56.8px] px-[1.25rem] lg:px-[73.84px] text-center lg:text-[35.5px] font-texte",
              },
              children: [
                "Les Jeux Olympiques rassemblent les meilleurs athlètes du monde pour une compétition exaltante qui célèbre l'excellence sportive, l'esprit de camaraderie, et l'unité globale. Rejoignez-nous pour vivre des moments inoubliables et encourager vos nations favorites dans un spectacle de talent, de détermination, et de passion.",
              ],
            },
            {
              type: "div",
              attributes: {
                class:"flex justify-center space-x-2 lg:space-x-20 mt-[3.125rem] lg:mt-[102.24px] rounded-xl",
              },
              children: [
                this.renderButton("Intérieur", "Indoor"),
                this.renderButton("Extérieur", "Outdoor"),
              ],
            },
            this.renderSports(),
          ],
        },
        { type: Footer },
      ],
    };
  }
}

export default Jeux;
