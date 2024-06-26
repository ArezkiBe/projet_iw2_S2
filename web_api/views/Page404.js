import BrowserLink from "../components/BrowserLink.js";
import { Component } from "../core/MiniReact.js";
import MiniReactDom from "../core/MiniReactDom.js";

// export default function Page404() {
//   return {
//     type: "h1",
//     attributes : {
//       class: "",
//     },
//     children: [
//       BrowserLink({ title: "Page 1", path: "/page1" }),
//       {
//         type: "i",
//         attributes : {
//           class: "ml-3",
//         },
//         children: ["Page 404"],
//       },
//     ],
//   };
// }

class Page404 extends Component {
  render() {
    return  {
      type: "h1",
      attributes: {
        class: "", 
      },
      children: [
        {
          type: BrowserLink,
          props: {
            title: "Page 2",
            path: "/page2"
          }
        },
        {
          type: "i",
          attributes : {
            class: "ml-3",
          },
          children: ["Page 404"],
        },
      ],
    }
  }
}


export default Page404;