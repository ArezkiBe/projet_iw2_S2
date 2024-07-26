import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import MiniReactDom from "../core/MiniReactDom.js";


class Contact extends Component {
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
          children: ["Contact"]
        },
        {
          type: "p",
          attributes: {
          class: "mt-[2rem] lg:mt-[56.8px] px-[1.25rem] lg:px-[73.84px] text-center lg:text-[35.5px]",
          },
          children: ["Découvrez le parcours et l'expertise des créateurs de ce site dédié aux Jeux Olympiques de Paris 2024 en visitant leurs profils LinkedIn : Bilal Amara, Arezki Beggar et Dany Sambo."]
        },
      ],
    }
  }
}

export default Contact;
