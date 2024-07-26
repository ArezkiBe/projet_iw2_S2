import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import Button from "../components/Button.js";
import MiniReactDom from "../core/MiniReactDom.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";


class MapPage extends Component{

  constructor(props) {
    super();
    this.data = props.data;
    this.map = null;
    this.osm = null;
    this.mapHeight = window.innerHeight * 0.75  ;
    this.mapWidth = window.innerWidth  ;

    this.state = {
      spots : [],
      sites: [],
      filteredIcons: [],
    }

    this.siteFilter = false;
    this.spotFilter = false;

    this.layerGroup = null;

    this.initIcons()
    this.coordinates = [[48.867938, 2.334325],[48.868539, 2.358056]]

    this.initialized = false;
    this.filterOpen = false;
    this.init()

  }

  init() {
    window.addEventListener("pageLoaded", () => {
      if (this.filterOpen) {
        this.renderMap()
      } else {
        this.map = L.map('map').setView([48.8566, 2.3522], 13);
        this.layerGroup =L.layerGroup().addTo(this.map);
        this.osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        this.initMarkers();

        this.initialized = true;
      }
    })
  }


  initIcons() {
    let spots = this.data.getSpots();
    let sites = this.data.getVenues();

    for (let i = 0; i < spots.length; i++) {
      let icon = L.icon({
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/spot.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      this.state.spots.push({
        id: spots[i].id,
        icon: icon,
        coordinates: spots[i].coordinates
      })
      
    }

    for (let i = 0; i < sites.length; i++) {
      let icon = L.icon({
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/site.svg?alt=media&token=7c86bdb2-709b-4b6c-a42d-aabd8e9f0662',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      this.state.sites.push({
        id: sites[i].id,
        icon: icon,
        coordinates: sites[i].coordinates
      })
      
    }

    this.state.filteredIcons.push(...this.state.sites, ...this.state.spots);

  }


  initMarkers() {
    let filteredIcons = this.state.filteredIcons;
    for (let i = 0; i < filteredIcons.length; i++) {
      L.marker(filteredIcons[i].coordinates, {icon: filteredIcons[i].icon}).addTo(this.layerGroup);
      
    }
  }


  render() {
    return {
      type: "div",
      attributes: {
        class: "flex-grow overflow-y-auto", 
      },
      children: [
        { type: Navbar },
        this.renderFilterPage(),
        {
          type: "div",
          attributes: {
            class: "flex justify-between items-center mt-[32px] px-[16px]"
          },
          children: [
            this.renderSiteButton(),
            this.renderSpotButton(),
          ]
        },
        this.renderMap(),
        {
          type: Footer,
        }
      ],
    };
  }

  renderMap(bool = false) {
    if (this.filterOpen && !bool) {
      return "";
    } else {
      return {
        type: "div",
        attributes : {
          id: "map",
          class: "h-["+this.mapHeight+"px] w-["+this.mapWidth+"px] mt-[18px]",
        },
      }
    }
  }

  renderFilterPage() {
    if (!this.filterOpen) {
      return {
        type: "div",
        attributes: {
          id: "filterModal",
          class: "opacity-0"
        }
      };
    }
    return {
      type: "div",
      attributes: {
        id: "filterModal",
        class: "absolute top-0 w-full h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-100000"
      },
      children: [
        {
          type: "div",
          attributes: {
            class: "p-4"
          },
          children: [
            {
              type: "span",
              attributes: {
                id: "closeFilterBtn",
                class: "text-2xl font-semibold cursor-pointer float-right"
              },
              events: {
                click: [function () {
                  this.openFilter();
                }.bind(this)],
              },
              children: ["×"]
            },
            {
              type: "h2",
              attributes: {
                class: "text-xl font-bold mb-4"
              },
              children: ["Filtres"]
            },
            {
              type: "form",
              attributes: {},
              children: [
                {
                  type: "label",
                  attributes: {
                    class: "block mb-2"
                  },
                  children: [
                    "Sites de compétition",
                    {
                      type: "input",
                      attributes: {
                        type: "checkbox",
                        name: "filter1",
                        class: "ml-2 form-checkbox h-4 w-4 text-blue-600"
                      }
                    }
                  ]
                },
                {
                  type: "label",
                  attributes: {
                    class: "block"
                  },
                  children: [
                    "Spots",
                    {
                      type: "input",
                      attributes: {
                        type: "checkbox",
                        name: "filter2",
                        class: "ml-2 form-checkbox h-4 w-4 text-blue-600"
                      }
                    }
                  ]
                },
                {
                  type: "label",
                  attributes: {
                    class: "block mb-2"
                  },
                  children: [
                    "Filtre 3",
                    {
                      type: "input",
                      attributes: {
                        type: "checkbox",
                        name: "filter1",
                        class: "ml-2 form-checkbox h-4 w-4 text-blue-600"
                      }
                    }
                  ]
                },
                {
                  type: "label",
                  attributes: {
                    class: "block mb-2"
                  },
                  children: [
                    "Filtre 4",
                    {
                      type: "input",
                      attributes: {
                        type: "checkbox",
                        name: "filter1",
                        class: "ml-2 form-checkbox h-4 w-4 text-blue-600"
                      }
                    }
                  ]
                },
                {
                  type: "label",
                  attributes: {
                    class: "block mb-2"
                  },
                  children: [
                    "Filtre 5",
                    {
                      type: "input",
                      attributes: {
                        type: "checkbox",
                        name: "filter1",
                        class: "ml-2 form-checkbox h-4 w-4 text-blue-600"
                      }
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    };
  }

  renderSpotButton() {
    return {
      type: "button",
      attributes: {
        class: "border border-black rounded-full w-[116px] text-[11px] h-[35px]",
        id: 'spots'
      },
      events: {
        click: [function () {
          this.toggleSpots();
        }.bind(this)],
      },
      children: ["Spots"]
    }
  }

  renderSiteButton() {
    return {
      type: "button",
      attributes: {
        class: "border border-black rounded-full w-[116px] text-[11px] h-[35px]",
        id: 'sites'
      },
      events: {
        click: [function () {
          this.toggleSites();
        }.bind(this)],
      },
      children: ["Sites de competition"]
    }
  }

  openFilter() {

    this.filterOpen = !this.filterOpen;

    this.update();
  }

  toggleSites() {
    this.siteFilter = !this.siteFilter;

    this.updateFilter();
  }

  toggleSpots() {
    this.spotFilter = !this.spotFilter;

    this.updateFilter();
  }

  update() {
    const element = this.renderFilterPage();
    const element2 = this.renderMap(true);
    let updateFilterPage = new CustomEvent("updateDOM", {
      detail: { id: "filterModal", element: element },
    });
    let update = new CustomEvent("updateDOM", {
      detail: { id: "map", element: element2 },
    });

    window.dispatchEvent(updateFilterPage);
    if (this.filterOpen) window.dispatchEvent(update);
  }

  updateFilter() {
    this.layerGroup.clearLayers();

    this.state.filteredIcons = [];
    if (this.siteFilter) {
      this.state.filteredIcons.push(...this.state.sites);

    }

    if (this.spotFilter) {
      this.state.filteredIcons.push(...this.state.spots);
    }


    this.initMarkers();


  }


}


export default MapPage;