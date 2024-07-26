import Page1 from "./views/Page1.js";
import Page404 from "./views/Page404.js";
import Spot from "./views/Spot.js";
import Page2 from "./views/Page2.js";
import Home from "./views/Home.js";
import Spots from "./views/Spots.js";
import MapPage from "./views/MapPage.js";
import Jeu from "./views/Jeu.js";
import Calendar from "./views/Calendar.js";
import Jeux from "./views/Jeux.js";
import About from "./views/About.js";
import Contact from "./views/Contact.js";

export default {
  "/" : Home,
  "/jeu": Jeu,
  "/calendar": Calendar,
  "/jeux": Jeux,
  "/page2": Page2,
  "/map": MapPage,
  "/spot": Spot,
  "/spots": Spots,
  "/about": About,
  "/contact": Contact,
  "*": MapPage,
};
