import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";

class Jeu extends Component {
  render() {
    return {
      type: "div",
      children: [
        //new Navbar().render(),
        {
          type: Banner,
          props: {
            bannerSrc: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/bgBasketBall.svg?alt=media&token=a1341b3a-5ad7-4567-955a-2e2e7d47f002",
            logoSrc: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/basketBall.svg?alt=media&token=b8fd80aa-c9a9-42f7-b682-01d6b88e3eda",
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
                    class: "text-[40px] font-bold pb-[8px] mt-[107px]",
                  },
                  children: ["Basketball 3x3"],
                },
                {
                  type: "p",
                  attributes: {
                    class: "mt-2 text-gray-600 text-[16px] mx-[29px]",
                  },
                  children: [
                    "Initialement, le basketball fut inventé pour permettre aux élèves de James W. Naismith, inventeur du sport, de garder la forme pendant l’hiver.",
                  ],
                },
                {
                  type: "p",
                  attributes: {
                    class: "mt-2 text-gray-600 text-[16px] mx-[29px]",
                  },
                  children: [
                    "Ce professeur d’éducation physique au Centre de formation international YMCA de Springfield met au point, en décembre 1891, un sport en salle dont la plupart des règles sont toujours en vigueur aujourd’hui pour régir le fonctionnement du basketball.",
                  ],
                },
                {
                  type: "p",
                  attributes: {
                    class: "mt-2 text-gray-600 text-[16px] mx-[29px]",
                  },
                  children: [
                    "Dans les années 1920, les premiers matchs internationaux sont disputés, et dans les années 1950 les premiers championnats du monde masculins et féminins sont organisés.",
                  ],
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
                    class: "font-bold text-[40px]",
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
                        children: [
                          this.renderCalendarDay("Sam", "29", "Juin"),
                          this.renderCalendarDay("Dim", "30", "Juin"),
                          this.renderCalendarDay("Lun", "1", "Jui"),
                        ]
                      },
                    ]
                  },
              ],
            },
            {
              type: "div",
              attributes: {
                class: "mt-8 justify-center px-[14px]",
              },
              children: [
                this.renderMatch("19H", "HOMMES - groupe D", "États Unis", "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/flagsUsa.svg?alt=media&token=99d9dbd0-c2f8-41ef-bf10-8ec5fc51071a", "Jamaïque", "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/flagsJamaique.svg?alt=media&token=360c454e-421f-4ced-88c7-a17a4fda056d"),
                this.renderMatch("17H", "HOMMES - groupe D", "Grèce", "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/flagsGrece.svg?alt=media&token=0f368089-d15f-4069-bd39-87db2e8559e8", "Pologne", "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/flagsPologne.svg?alt=media&token=f2c45e67-9e40-4788-a566-33fcf0df68ec"),
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
                    class: "font-bold pt-[8px] text-left pl-[32px] text-[40px]",
                  },
                  children: ["Collaboration"],
                },
                {
                  type: "div",
                  attributes: {
                    class: "grid grid-cols-2 gap-x-[80px] gap-y-[24px] px-[56px] pt-[16px] pb-[40px]",
                  },
                  children: [
                    this.renderCollaborator("https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/apple.svg?alt=media&token=a6961ee7-113c-4a4a-ae98-e08a079ec5f3"),
                    this.renderCollaborator("https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/netflix.svg?alt=media&token=d0814886-1466-461d-9b18-cde3883599dc"),
                    this.renderCollaborator("https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/uber.svg?alt=media&token=e40cad77-5486-4e94-9e4e-1eee0061cc6a"),
                    this.renderCollaborator("https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/amazon.svg?alt=media&token=2a0b4c59-cc43-4f71-8d69-69f3034d4d47"),
                  ],
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
            class: "w-[100px]",
          },
        },
      ],
    };
  }
}

export default Jeu;
