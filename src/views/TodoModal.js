import { format } from "date-fns"
import { newElement } from "../appServices.js"
import closeBtnIcon from "../assets/close.png"

// NOTE: add parameters
export default function TodoModal() {

  const contentContainer = document.querySelector(".content-container")

  const showTodo = newElement("dialog", {id: "show-todo"})
  contentContainer.appendChild(showTodo)

  const dialogContainer = newElement("div", {class: "dialog-container"})
  showTodo.appendChild(dialogContainer)

  const dialogHeader = newElement("div", {class: "dialog-header"})
  dialogContainer.appendChild(dialogHeader)
  const dialogHeaderClose = newElement("div", {class: "dialog-close", command: "close", commandfor: "show-todo"})
  dialogHeaderClose.addEventListener("click", () => showTodo.close())
  dialogHeader.appendChild(dialogHeaderClose)
  const dialogHeaderCloseImg = newElement("img", {src: closeBtnIcon, alt: "icon for close button", command: "close", commandfor: "show-todo"})
  dialogHeaderClose.appendChild(dialogHeaderCloseImg)

  // Dialog content
  const dialogContent = newElement("div", {class: "dialog-content"})
  dialogContainer.appendChild(dialogContent)

  // Dialog content main
  const dialogContentMain = newElement("div", {class: "dialog-content-main"})
  dialogContent.appendChild(dialogContentMain)

  const dialogCompleteBtn = newElement("div", {class: "dialog-content-column"})
  dialogContentMain.appendChild(dialogCompleteBtn)
  const dialogCompleteBtnInput = newElement("input", {class: "todo-complete", type: "radio", autocomplete: "off"})
  dialogCompleteBtn.appendChild(dialogCompleteBtnInput)

  const dialogContentInfo = newElement("div", {class: "dialog-content-column"})
  dialogContentMain.appendChild(dialogContentInfo)
  const hiddenTextArea = newElement("textarea", {class: "hidden"})
  dialogContentInfo.appendChild(hiddenTextArea)
  const titleTextArea = newElement("textarea", {class: "dialog-content-text", name: "todo-title", id: "todo-title", rows: "1"})
  titleTextArea.classList.add("dialog-h2")
  dialogContentInfo.appendChild(titleTextArea)
  const descriptionTextArea = newElement("textarea", {class: "dialog-content-text", name: "todo-description", id: "todo-description", rows: "5"})
  dialogContentInfo.appendChild(descriptionTextArea)

  // Dialog content aside
  const dialogContentAside = newElement("div", {class: "dialog-content-aside"})
  dialogContent.appendChild(dialogContentAside)

  // Todo project
  const dialogAsideProject = newElement("div", {class: "dialog-aside-item"})
  dialogContentAside.appendChild(dialogAsideProject)
  const dialogAsideProjectPara = newElement("p", {}, "Project")
  dialogAsideProject.appendChild(dialogAsideProjectPara)
  const dialogAsideProjectSelect = newElement("select", {name: "project", id: "select-project"})
  dialogAsideProject.appendChild(dialogAsideProjectSelect)

  // Todo Date
  const dialogAsideDate = newElement("div", {class: "dialog-aside-item"})
  dialogContentAside.appendChild(dialogAsideDate)
  const datePara = newElement("p", {}, "Date")
  dialogAsideDate.appendChild(datePara)

  const date = new Date()
  const currentDate = format(new Date(date), "yyyy-MM-dd")

  const dateInput = newElement("input", {type: "date", id: "todo-date", min: currentDate})
  dialogAsideDate.appendChild(dateInput)

  // Todo Priority
  const dialogAsidePrio = newElement("div", {class: "dialog-aside-item"})
  dialogContentAside.appendChild(dialogAsidePrio)

  const priorityPara = newElement("p", {}, "Priority")
  dialogAsidePrio.appendChild(priorityPara)
  const selectPriority = newElement("select", {name: "priority", id: "todo-priority", autocomplete: "off"})
  dialogAsidePrio.appendChild(selectPriority)
  const priorityOne = newElement("option", {value: "1"}, "High")
  const priorityTwo = newElement("option", {value: "2"}, "Medium")
  const priorityThree = newElement("option", {value: "3"}, "Low")
  const priorityFour = newElement("option", {value: "4"}, "Very Low")
  selectPriority.append(priorityOne, priorityTwo, priorityThree, priorityFour)

  // Todo Label
  const dialogAsideLabels = newElement("div", {class: "dialog-aside-item"})
  dialogContentAside.appendChild(dialogAsideLabels)
  const labelsTitle = newElement("p", {}, "Labels")
  dialogAsideLabels.appendChild(labelsTitle)
  const labelsList = newElement("div", {class: "dialog-aside-labels"})
  dialogAsideLabels.appendChild(labelsList)

  // Clear data on "closing" the modal
  showTodo.addEventListener("close", () => {
    titleTextArea.textContent = ""
    descriptionTextArea.textContent = ""
    while (dialogAsideProjectSelect.firstChild) {
      dialogAsideProjectSelect.removeChild(dialogAsideProjectSelect.lastChild)
    }
    dateInput.value = ""
    selectPriority.value = ""
    while (labelsList.firstChild) {
      labelsList.removeChild(labelsList.lastChild)
    }
  })
}
