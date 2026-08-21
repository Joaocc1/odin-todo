import "./styles.css"
import startApp from "./appController.js"

startApp()

// ********** testing ui generation *********

function newElement({type, parent, addClass, text, attributes = []} = {}) {
  const parentNode = document.querySelector(parent)
  const newElement = document.createElement(type)

  if (addClass) {
    newElement.classList.add(addClass)
  }

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

// import image from "./assets/add.png"

// newElement({ type: "div", parent: "#content", addClass: "header" })
// newElement({type: "h1", parent: ".header", text: "Hello World"})

// newElement({ type: "img", parent: ".header", attributes: [["src", image]] })

// ++++++++++ Next steps +++++++++++++
//
// 1. implement ui
// 2. implement local storage
//
// (optional) implement feature that gives option to recurring todos
