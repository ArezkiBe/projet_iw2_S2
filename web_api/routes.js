import Page1 from "./views/Page1.js";
import Page404 from "./views/Page404.js";
import Page2 from "./views/Page2.js";

export default {
  "/page1": Page1,
  "/page2": Page2,
  "*": Page404,
};
