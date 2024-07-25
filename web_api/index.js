import MiniReactDom from "./core/MiniReactDom.js";
import routes from "./routes.js";

Date.prototype.addDays=function(d){return new Date(this.valueOf()+864E5*d);};

MiniReactDom.render(document.getElementById("root"), routes);