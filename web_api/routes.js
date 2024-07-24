import Page1 from "./views/Page1.js";
import Page404 from "./views/Page404.js";
import Spot from "./views/Spot.js";
import Page2 from "./views/Page2.js";
import Home from "./views/Home.js";
import Spots from "./views/Spots.js";
import MapPage from "./views/MapPage.js";
import Jeu from "./views/Jeu.js";
import Jeux from "./views/Jeux.js";
import Calendrier from "./views/Calendrier.js";

export default {
  "/" : Home,
  "/jeu": Jeu,
  "/jeux": Jeux,
  "/spot": Spot,
  "/page2": Page2,
  "/map": MapPage,
  "*": MapPage,
};
