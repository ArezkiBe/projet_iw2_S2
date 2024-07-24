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
        class: "flex flex-col items-center justify-center w-[5.625rem] h-[3.75rem] bg-orange-500 rounded-md"
      },
      children: [
        {
          type: "span",
          attributes: {
            class: "text-sm font-title"
          },
          children: [weekDay]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm"
          },
          children: [day]
        },
        {
          type: "span",
          attributes: {
            class: "text-sm"
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
        class:
        "flex items-center p-2 mt-[2rem] bg-[#FFF5F5] border border-black rounded-[1.87rem] w-[22.62rem] h-[6.25rem]",
      },
      children: [
        {
          type: "img",
          attributes: {
            src: event.icon,
            alt: event.title,
            class: "w-[5rem] h-[5rem] ml-[2rem]",
          },
        },
        {
          type: "div",
          children: [
            {
              type: "h3",
              attributes: { class: "font-bold text-sm p-[0.625rem]" },
              children: [event.title],
            },
            {
              type: "p",
              attributes: { class: "text-xs whitespace-pre-line pl-[1.81rem]" },
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
            showSearchBar: true,
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
              attributes: { class: "text-4xl font-bold mt-[2.5rem] ml-[6.31] mr-[6.37]" },
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
              attributes: { class: "flex justify-center mt-[2rem]" },
              children: [
                {
                  type: "span",
                  attributes: { class: "text-yellow-500" },
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
              attributes: { class: "mt-[2rem]  px-[1.25rem] text-center" },
              children: [
                "L’Arena Bercy est un lieu emblématique de la culture et du sport en France et à Paris, reconnaissable par sa forme pyramidale caractéristique qui attire l’œil dans le décor du 12e arrondissement de Paris. Sortie de terre en 1984, cette salle accueille à la fois des événements sportifs du plus haut niveau, comme le Rolex Paris Master, un tournoi de tennis international masculin du circuit ATP, les phases finales du championnat d’Europe féminin de handball 2018, et des concerts parmi les plus grands artistes français et internationaux comme Madonna, Daft Punk, Johnny Hallyday ou encore Paul McCartney. ",
              ],
            },

            {
              type: "div",
              attributes: {
                class: "flex justify-around mt-[1.25rem] text-center text-base",
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
                class: "text-[2.25rem] font-semibold mt-[2rem] text-center",
              },
              children: ["Sports retransmis"],
            },
            {
              type: "div",
              attributes: {
                class: "flex justify-center mt-[1rem]"
              },
              children: [
                {
                  type: "div",
                  attributes: {
                    class: "flex space-x-6"
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

// import { Component } from "../core/MiniReact.js";
// import Banner from "../components/Banner.js";
// import Footer from "../components/Footer.js";

// class Spot extends Component {
//   constructor(data) {
//     super();
//     this.data = data;
//   }

//   renderCalendarDay(day, month) {
//     return {
//       type: "div",
//       attributes: {
//         class:
//         "flex items-center bg-[#FFF5F5] rounded-[30px] w-[23rem] h-[6rem] mx-auto",
//       },
//       children: [
//         { type: "span", children: [day] },
//         { type: "span", children: [month] },
//       ],
//     };
//   }

//   renderSportEvent(event) {
//     return {
//       type: "div",
//       attributes: {
//         class:
//           "flex items-center bg-[#FFF5F5] rounded-[30px] w-[18.2rem] h-[5rem] ml-[1.25rem]",
//       },
//       children: [
//         {
//           type: "img",
//           attributes: {
//             src: event.icon,
//             alt: event.title,
//             class: "w-[4rem] h-[4rem]",
//           },
//         },
//         {
//           type: "div",
//           children: [
//             {
//               type: "h3",
//               attributes: { class: "font-bold text-sm" },
//               children: [event.title],
//             },
//             {
//               type: "p",
//               attributes: { class: "text-xs whitespace-pre-line" },
//               children: [event.times],
//             },
//           ],
//         },
//       ],
//     };
//   }

//   renderSocialIcon(icon) {
//     return {
//       type: "img",
//       attributes: {
//         src: icon,
//         alt: "Social Icon",
//         class: "w-6 h-6",
//       },
//     };
//   }

//   render() {
//     return {
//       type: "div",
//       children: [
//         {
//           type: Banner,
//           props: {
//             bannerSrc: "https://picsum.photos/900/600",
//             showSearchBar: true,
//             title: "JEUX",
//             titleStyle: "text-3xl",
//           },
//         },

//         {
//           type: "div",
//           attributes: {
//             class: "container mx-auto text-center",
//           },
//           children: [
//             {
//               type: "h1",
//               attributes: { class: "text-4xl font-bold mt-[2.5rem] mb-[2rem] ml-[6.31] mr-[6.37]" },
//               children: ["Arena Bercy"],
//             },
//             {
//               type: "div",
//               attributes: {
//                 class: "mt-2",
//               },
//             },
//             {
//               type: "div",
//               attributes: { class: "flex justify-center mt-2" },
//               children: [
//                 {
//                   type: "span",
//                   attributes: { class: "text-yellow-500" },
//                   children: [
//                     {
//                       type: "img",
//                       attributes: {
//                         src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/Etoiles.svg?alt=media&token=cd6484b6-975d-4956-adb3-d88b19c63b40",
//                       },
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               type: "p",
//               attributes: { class: "text-sm" },
//               children: [
//                 "L’Arena Bercy est un lieu emblématique de la culture et du sport en France et à Paris, reconnaissable par sa forme pyramidale caractéristique qui attire l’œil dans le décor du 12e arrondissement de Paris. Sortie de terre en 1984, cette salle accueille à la fois des événements sportifs du plus haut niveau, comme le Rolex Paris Master, un tournoi de tennis international masculin du circuit ATP, les phases finales du championnat d’Europe féminin de handball 2018, et des concerts parmi les plus grands artistes français et internationaux comme Madonna, Daft Punk, Johnny Hallyday ou encore Paul McCartney. ",
//               ],
//             },

//             {
//               type: "div",
//               attributes: {
//                 class: "flex justify-around text-sm",
//               },
//               children: [
//                 { type: "span", children: ["Intérieur"] },
//                 { type: "span", children: ["Nourriture/Boissons"] },
//                 { type: "span", children: ["50 Pers Max"] },
//               ],
//             },

//             // Sports Retransmis
//             {
//               type: "h2",
//               attributes: {
//                 class: "text-xl font-bold",
//               },
//               children: ["Sports retransmis"],
//             },
//             {
//               type: "div",
//               attributes: {
//                 class: "flex justify-center space-x-4",
//               },
//               children: [
//                 this.renderCalendarDay("Sam", "29"),
//                 this.renderCalendarDay("Dim", "30"),
//                 this.renderCalendarDay("Lun", "1"),
//               ],
//             },
//             {
//               type: "div",
//               attributes: {
//                 class: "mt-4 mb-3",
//               },
//               children: this.data.getSportEvents().map(this.renderSportEvent),
//             },
//           ],
//         },

//         { type: Footer },
//       ],
//     };
//   }
// }

// export default Spot;
