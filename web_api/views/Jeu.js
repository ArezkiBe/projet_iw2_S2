import { Component } from "../core/MiniReact.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";

class Jeu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: null,
    };
    this.data = props.data;

    const sportId = this.props.id;
    const sport = this.data.sports.find(s => s.id === sportId);
    this.state.sport = sport;

    const sponsors = sport.sponsors.map(sponsorId => this.data.sponsors.find(s => s.id === sponsorId));
    this.state.sponsors = sponsors;
  }

  render() {
    return {
      type: "div",
      children: [
        //new Navbar().render(),
        {
          type: Banner,
          props: {
            bannerSrc: this.state.sport.bannerUrl,
            logoSrc: this.state.sport.logoUrl,
            showLogo: true,
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
                    class: "text-[40px] font-bold pb-[8px] mt-[107px] font-title",
                  },
                  children: this.state.sport.name,
                },
                {
                  type: "div",
                  attributes: {
                    class: "mt-2",
                  },
                  children: this.state.sport.description.reduce((acc, text, index) => {
                    if (index > 0) {
                      acc.push({ type: "br" });
                    }
                    acc.push({ type: "span",attributes: {class: "flex justify-center items-center text-center px-[1.813rem] font-texte lg:text-[16px]",}, children: [text] });
                    return acc;
                  }, []),
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
                    class: "font-bold text-[40px] font-title",
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
                class: "mt-8 justify-center px-[14px] font-texte text-[16px]",
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
                    class: "font-bold pt-[8px] text-left pl-[32px] text-[40px] font-title",
                  },
                  children: ["Collaboration"],
                },
                {
                  type: "div",
                  attributes: {
                    class: "grid grid-cols-2 gap-x-[80px] gap-y-[24px] px-[56px] pt-[16px] pb-[40px]",
                  },
                  children: this.state.sponsors.map(sponsor => this.renderCollaborator(sponsor.logoUrl)),
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
