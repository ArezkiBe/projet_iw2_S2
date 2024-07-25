import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import Button from "../components/Button.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Footer from "../components/Footer.js";


class MapPage extends Component{

  constructor() {
    super();
    this.map = null;
    this.osm = null;
    this.mapHeight = window.innerHeight * 0.75  ;
    this.mapWidth = window.innerWidth  ;
    this.init()
  }

  init() {
    window.addEventListener("pageLoaded", () => {
      this.map = L.map('map').setView([48.8566, 2.3522], 13);
      this.osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);

      this.initIcons();

    })
  }


  initIcons() {
    let myIcon = L.icon({
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/filter.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });
    
    L.marker([48.8566, 2.3522], {icon: myIcon}).addTo(this.map);
  }


  render() {
    return {
      type: "div",
      attributes: {
        class: "flex-grow overflow-y-auto", 
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "flex justify-between items-center mt-[32px] lg:mt-[102.24px] px-[16px] lg:px-[56.8px]"
          },
          children: [
            {
              type: "img",
              attributes: {
                class: "cursor-pointer lg:w-[99.4px] lg:w-[99.4px] lg:h-[99.4px]",
                src: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/filter.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662"
              }
            },
            {
              type: "button",
              attributes: {
                class: "border border-black lg:text-black-300 rounded-full w-[116px] lg:w-[342.22px] text-[11px] lg:h-[61.77px] lg:text-[35.5px] h-[35px]"
              },
              children: ["Sites de competition"]
            },
            {
              type: "button",
              attributes: {
                class: "border border-black lg:text-black-300 rounded-full w-[116px] lg:w-[342.22px] text-[11px] lg:h-[61.77px] lg:text-[35.5px] h-[35px]"
              },
              children: ["Spots"]
            }
          ]
        },        
        {
          type: "div",
          attributes : {
            id: "map",
            class: "h-["+this.mapHeight+"px] w-["+this.mapWidth+"px] mt-[18px] lg:mt-[56.8px]",
          },
        },
        {
          type: Footer,
        }
      ],
    };
  }
}


export default MapPage;