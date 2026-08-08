import "./styles.css"
import App, { addProject, addTodo, getProjects, getTodo, getTodos } from "./App.js";


addTodo("test", "this is a test", "01 08 2026", "testing", 1, 1)
addProject("Dev", "")
console.log(getProjects())
getTodo(1).editTitle("New title")
console.log(getTodos())

// ********** testing ui generation *********

function newElement({type, parent, addClass, text, attributes = []} = {}) {
  const parentNode = document.querySelector(parent)
  const newElement = document.createElement(type)
  newElement.classList.add(addClass)

  if (text && text !== "") {
    newElement.textContent = text
  }

  if (attributes.length !== 0) {
    for (let i = 0; i < attributes.length; i++) {
      newElement.setAttribute(attributes[i][0], attributes[i][1])
    }
  }

  parentNode.appendChild(newElement)
}

import image from "./assets/add.png"

newElement({ type: "div", parent: "#content", addClass: "header" })
newElement({type: "h1", parent: ".header", text: "Hello World"})

newElement({ type: "img", parent: ".header", attributes: [["src", image]] })

// ++++++++++ Next steps +++++++++++++
//
// 1. implement ui
// 2. implement local storage
//
// (optional) implement feature that gives option to recurring todos
