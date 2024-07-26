import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import MiniReactDom from "../core/MiniReactDom.js";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: null,
    };
    this.data = props.data;
  }


  render() {
    return  {
      type: "div",
      children: [   
        {
          type: "h1",
          attributes: {
          class: "font-bold pt-[8px] text-left lg:text-center pl-[32px] mt-[2rem] lg:text-[56.8px] lg:mt-[102.24px] text-[40px] font-title",
          },
          children: ["A propos"]
        },
        {
          type: "p",
          attributes: {
          class: "mt-[2rem] lg:mt-[56.8px] px-[1.25rem] lg:px-[73.84px] text-center lg:text-[35.5px]",
          },
          children: ["Nous sommes trois étudiants passionnés  par le développement web et avons décidé de relever un défi de taille :  créer un site web dédié aux Jeux Olympiques  de Paris 2024. Ce projet nous permet non seulement de mettre en pratique nos compétences techniques, mais aussi de contribuer à l'excitation entourant cet événement mondial."]
        },
        {
          type: "h2",
          attributes: {
          class: "font-bold pt-[8px] text-left lg:text-center pl-[32px] mt-[2rem] lg:text-[56.8px] lg:mt-[102.24px] text-[40px] font-title",
          },
          children: ["Notre Équipe"]
        },
        {
          type: "p",
          attributes: {
          class: "mt-[2rem] lg:mt-[56.8px] px-[1.25rem] lg:px-[73.84px] text-center lg:text-[35.5px]",
          },
          children: ["Bilal AMARA, Arezki BEGGAR, Dany SAMBO"]
        }
      ],
    }
  }
}

export default About;

// //////////////////////////////////////////////////

