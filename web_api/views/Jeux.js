import { Component } from "../core/MiniReact.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Jeux extends Component {
  constructor(data) {
    super();
    this.data = data;
  }

  renderSport(sport) {
    return {
      type: "div",
      attributes: {
        class:"flex justify-center w-[364px] h-[155px] border-[#D9D9D9] border-t",
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
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                class: " shrink-0 max-w-full aspect-square fill-black w-[100px] h-[100px]",
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
                class:"text-base font-bold text-left text-black",
              },
              children: [sport.name],
            },

            {
              type: "img",
              attributes: {
                src:  "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/Line.svg?alt=media&token=fe7f509b-e9de-455d-8fa5-6fc5da199119",
                class: "w-[8.125rem]",
              },
              children:[],
            },
            
            {
              type: "button",
              attributes: {
                class:"w-[73px] h-[26px] px-[7px] text-sm text-amber-400 bg-red-600 rounded-2xl font-[760]",
              },
              children: ["DETAILS"],
            },
          ],
        },
      ],
    };
  }

  renderButton(text) {
    return {
      type: "div",
      attributes: {
        class:"bg-[#D9D9D9] rounded-[0.625rem] px-[10px] py-[4px] flex items-center justify-center",
      },
      children: [
        {
          type: "button",
          attributes: { class: "text-[#000000]" },
          children: [text],
        },
      ],
    };
  }

  renderSocialIcon(icon) {
    return {
      type: "a",
      attributes: {
        href: "#",
        class: "mx-2",
      },
      children: [
        {
          type: "img",
          attributes: {
            src: icon,
            alt: "Social Icon",
            class: "w-6 h-6",
          },
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
              attributes: { class: "text-[2.5rem] font-bold mt-[3.375rem] ml-[6.31] mr-[6.37]" },
              children: ["Jeux"],
            },
            {
              type: "p",
              attributes: {
                class:"text-base text-center mt-[1.25rem] px-[29px]",
              },
              children: [
                "INITIALEMENT, LE BASKETBALL FUT INVENTE POUR PERMETTRE AUX ELEVES DE JAMES W. NAISMITH, INVENTEUR DU SPORT, DE GARDER LA FORME PENDANT L'HIVER. DANS LES ANNEES 1920, LES PREMIERS MATCHS INTERNATIONAUX SONT DISPUTES. ET DANS LES ANNEES 1950, LES PREMIERS CHAMPIONNATS DU MONDE MASCULINS ET FEMININS SONT ORGANISES.",
              ],
            },

            {
              type: "div",
              attributes: {
                class:"flex justify-center space-x-4 mt-[3.125rem]",
              },
              children: [
                this.renderButton("Intérieur"),
                this.renderButton("Extérieur"),
              ],
            },

            {
              type: "div",
              attributes: {
                class:"flex flex-col items-center gap-6 mt-[1.5rem] mb-[40px]",
              },
              children: this.data.getSports().map(this.renderSport),
            },
          ],
        },
        { type: Footer },
      ],
    };
  }
}

export default Jeux;
