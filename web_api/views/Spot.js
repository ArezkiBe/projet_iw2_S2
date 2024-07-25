import { Component } from "../core/MiniReact.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Spot extends Component {
  constructor(props) {
    super();
    this.data = props.data;
  }

  renderCalendarDay(weekDay, day, Month) {
    return {
      type: "div",
      attributes: {
        class: "flex flex-col items-center justify-around w-[5.625rem] lg:w-[272.6px] h-[3.75rem] lg:h-[106.5px] bg-orange-500 rounded-md"
      },
      children: [
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte"
          },
          children: [weekDay]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte"
          },
          children: [day]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm lg:text-[28.4px] font-texte"
          },
          children: [Month]
        }
      ]
    }
  }

  renderSportEvent(event) {
  return {
    type: "div",
    attributes: {
      class: "flex items-center p-2 mt-[2rem] bg-[#FFF5F5] border border-black rounded-[1.87rem] w-[22.62rem] lg:w-[852px] h-[6.25rem] lg:h-[286.13px] justify-around" 
    },
    children: [
      {
        type: "div",
        attributes: {
          class: "flex items-center justify-center" 
        },
        children: [
          {
            type: "img",
            attributes: {
              src: event.icon,
              alt: event.title,
              class: "w-[5rem] h-[5rem] lg:w-[213.71px] lg:h-[235.72px]" 
            },
          },
        ],
      },
      {
        type: "div",
        attributes: {
          class: "flex flex-col justify-center items-center text-center lg:items-start lg:text-left"
        },
        children: [
          {
            type: "h3",
            attributes: { class: "font-bold text-sm lg:text-[45.44px]" },
            children: [event.title],
          },
          {
            type: "p",
            attributes: { 
              class: "text-xs justify-around whitespace-pre-line lg:pl-[1.81rem] text-center lg:text-left"
            },
            children: [event.times],
          },
        ],
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
    return {
      type: "div",
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
              attributes: { class: "text-4xl lg:text-[56.8px] font-bold mt-[2.5rem] lg:mt-[56.8px] ml-[6.31] mr-[6.37]" },
              children: ["Arena Bercy"],
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
              children: [
                {
                  type: "span",
                  attributes: { class: "text-yellow-500 lg:w-[188.15px]" },
                  children: [
                    {
                      type: "img",
                      attributes: {
                        src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/Etoiles.svg?alt=media&token=cd6484b6-975d-4956-adb3-d88b19c63b40",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "p",
              attributes: { class: "mt-[2rem] lg:mt-[56.8px] px-[1.25rem] lg:px-[73.84px] text-center lg:text-[35.5px]" },
              children: [
                "L’Arena Bercy est un lieu emblématique de la culture et du sport en France et à Paris, reconnaissable par sa forme pyramidale caractéristique qui attire l’œil dans le décor du 12e arrondissement de Paris. Sortie de terre en 1984, cette salle accueille à la fois des événements sportifs du plus haut niveau, comme le Rolex Paris Master, un tournoi de tennis international masculin du circuit ATP, les phases finales du championnat d’Europe féminin de handball 2018, et des concerts parmi les plus grands artistes français et internationaux comme Madonna, Daft Punk, Johnny Hallyday ou encore Paul McCartney. ",
              ],
            },

            {
              type: "div",
              attributes: {
                class: "flex justify-around mt-[1.25rem] lg:mt-[102.24px] text-center text-base lg:text-[35.5px]",
              },
              children: [
                { type: "span", children: ["Intérieur"] },
                { type: "span", children: ["Nourriture/Boissons"] },
                { type: "span", children: ["50 Pers Max"] },
              ],
            },

            // Sports Retransmis
            {
              type: "h2",
              attributes: {
                class: "text-[2.25rem] lg:text-[56.8px] font-semibold mt-[2rem] lg:mt-[102.24px] text-center",
              },
              children: ["Sports retransmis"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center mt-[1rem] lg:mt-[28.4px]"
              },
              children: [
                {
                  type: "div",
                  attributes: {
                    class: "flex space-x-6 lg:space-x-20"
                  },
                  children: [
                    this.renderCalendarDay("Sam", "29", "Juin"),
                    this.renderCalendarDay("Dim", "30", "Juin"),
                    this.renderCalendarDay("Lun", "1", "Jui"),
                  ]
                }
                
              ]
            },
            {
              type: "div",
              attributes: {
                class: "mt-[2rem] flex flex-col justify-center items-center mb-[2.5rem] px-[12px]",
              },
              children: this.data.getSportEvents().map(this.renderSportEvent),
            },
          ],
        },

        { type: Footer },
      ],
    };
  }
}

export default Spot;