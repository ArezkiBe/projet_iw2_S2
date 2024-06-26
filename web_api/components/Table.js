import { Component } from "../core/MiniReact.js";

class Table extends Component {
  #MAX_TR = 12;
  #MAX_TD = 12;
  #data  = JSON.parse(localStorage.getItem("karl")) || {};

  textIntoInput(event) {
    const td = event.currentTarget;
    const textNode = td.childNodes[0];
    const text = textNode.textContent;
    const input = document.createElement("input");
    input.value = text;
    td.removeChild(textNode);
    td.appendChild(input);
    td.removeEventListener("click", this.textIntoInput.bind(this));
    input.focus();
    input.addEventListener("blur", (event) => {
      const input = event.currentTarget;
      const text = input.value;
      const td = input.parentNode;
      const textNode = document.createTextNode(text);
      this.#data[td.dataset.coord] = text;
      localStorage.setItem("karl", JSON.stringify(this.#data));
      td.replaceChild(textNode, input);
      td.addEventListener("click", this.textIntoInput.bind(this));
    });
  }

  render() {
    return {
      type: "table",
      attributes : {
        class: "bg-pink-200",
      },
      props: {
        style: {
          "background-color": "pink",
        },
      },
      children: [
        {
          type: "tbody",
          children: Array.from({ length: this.#MAX_TR }, (_, i) => ({
            type: "tr",
            children: Array.from({ length: this.#MAX_TD }, (_, j) => ({
              type: "td",
              props: {
                dataCoord: `${i}.${j}`,
              },
              events : {
                click: [this.textIntoInput.bind(this)],
              },
              children: [this.#data[`${i}.${j}`] ?? "Default"],
            })),
          })),
        },
      ],
    };
  }
  
}

export default Table;