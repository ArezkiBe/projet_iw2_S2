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
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791",
                class: " shrink-0 max-w-full aspect-square fill-black w-[100px] lg:w-[234.3px] h-[100px] lg:h-[234.3px]",
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
                class:"text-base font-bold text-left text-black lg:text-[45.44px]",
              },
              children: [sport.name],
            },

            {
              type: "img",
              attributes: {
                src:  "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/Line.svg?alt=media&token=fe7f509b-e9de-455d-8fa5-6fc5da199119",
                class: "w-[8.125rem] lg:w-[381.27px]",
              },
              children:[],
            },
            
            {
              type: "button",
              attributes: {
                class:"w-[73px] lg:w-[273.71px] h-[26px] lg:h-[95.14px] px-[7px] text-sm text-amber-400 bg-red-600 rounded-2xl font-[760]",
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
        class:"bg-[#D9D9D9] rounded-[0.625rem] px-[10px] py-[4px] flex items-center justify-center lg:w-[248.5px] lg:h-[56.8px]",
      },
      children: [
        {
          type: "button",
          attributes: { class: "text-[#000000] lg:text-[35.5px] lg:px-[7.1px]" },
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
              attributes: { class: "text-center font-bold text-[2.5rem] lg:text-[56.8px] lg:mt-[102.24px]" },
              children: ["Jeux"],
            },
            {
              type: "p",
              attributes: {
                class:"mt-[2rem] lg:mt-[56.8px] px-[1.25rem] lg:px-[73.84px] text-center lg:text-[35.5px]",
              },
              children: [
                "INITIALEMENT, LE BASKETBALL FUT INVENTE POUR PERMETTRE AUX ELEVES DE JAMES W. NAISMITH, INVENTEUR DU SPORT, DE GARDER LA FORME PENDANT L'HIVER. DANS LES ANNEES 1920, LES PREMIERS MATCHS INTERNATIONAUX SONT DISPUTES. ET DANS LES ANNEES 1950, LES PREMIERS CHAMPIONNATS DU MONDE MASCULINS ET FEMININS SONT ORGANISES.",
              ],
            },

            {
              type: "div",
              attributes: {
                class:"flex justify-center space-x-2 lg:space-x-20 mt-[3.125rem] lg:mt-[102.24px] rounded-xl",
              },
              children: [
                this.renderButton("Intérieur"),
                this.renderButton("Extérieur"),
              ],
            },

            {
              type: "div",
              attributes: {
                class:"flex flex-col items-center gap-6 mt-[1.5rem] mb-[40px] lg:mt-[102.24px]",
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