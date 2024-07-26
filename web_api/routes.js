import Page404 from "./views/Page404.js";
import Spot from "./views/Spot.js";
import Page2 from "./views/Page2.js";
import Home from "./views/Home.js";
import Spots from "./views/Spots.js";
import MapPage from "./views/MapPage.js";
import Jeu from "./views/Jeu.js";
import Calendar from "./views/Calendar.js";
import DailyCalendar from "./views/DailyCalendar.js";
import Jeux from "./views/Jeux.js";
import Contact from "./views/Contact.js";
import About from "./views/About.js";

export default {
  "/" : Home,
  "/jeu": Jeu,
  "/calendar": Calendar,
  "/daily": DailyCalendar,
  "/jeux": Jeux,
  "/page2": Page2,
  "/map": MapPage,
  "/spot": Spot,
  "/spots": Spots,
  "/contact": Contact,
  "/about": About,
  "*": Page404,
};
