import { newElement, addProject } from "../appServices.js"
import closeBtnIcon from "../assets/close.png"

export default function projectModal() {

  const app = document.querySelector(".app")
  const contentContainer = document.querySelector(".content-container")

  const showProject = newElement("dialog", {id: "add-project"})
  app.appendChild(showProject)

  const dialogContainer = newElement("div", {class: "dialog-container"})
  showProject.appendChild(dialogContainer)

  const dialogHeader = newElement("div", {class: "dialog-header"})
  dialogContainer.appendChild(dialogHeader)
  const dialogHeaderClose = newElement("div", {class: "dialog-close", command: "close", commandfor: "show-project"})
  dialogHeaderClose.addEventListener("click", () => showProject.close())
  dialogHeader.appendChild(dialogHeaderClose)
  const dialogHeaderCloseImg = newElement("img", {src: closeBtnIcon, alt: "icon for close button", command: "close", commandfor: "show-project"})
  dialogHeaderClose.appendChild(dialogHeaderCloseImg)

  // Dialog content
  const dialogContent = newElement("div", {class: "dialog-content"})
  dialogContainer.appendChild(dialogContent)

  // Dialog content main
  const dialogContentMain = newElement("div", {class: "dialog-content-main"})
  dialogContent.appendChild(dialogContentMain)

  const dialogContentInfo = newElement("div", {class: "dialog-content-column"})
  dialogContentMain.appendChild(dialogContentInfo)
  const hiddenTextArea = newElement("textarea", {class: "hidden"})
  dialogContentInfo.appendChild(hiddenTextArea)
  const titleTextArea = newElement("textarea", {class: "dialog-content-text", name: "project-title", id: "project-title", rows: "1", placeholder: "Write a title here"})
  titleTextArea.classList.add("dialog-h2")
  dialogContentInfo.appendChild(titleTextArea)
	const descriptionTextArea = newElement("textarea", {
		class: "dialog-content-text", name: "project-description", id: "project-description", rows: "5", placeholder: "Write a description here"})
  dialogContentInfo.appendChild(descriptionTextArea)

  // Cancel and add buttons
  const modalButtons = newElement("div", { class: "modal-buttons" })
  dialogContentInfo.appendChild(modalButtons)
  const cancelBtn = newElement("button", {class: "cancel-btn", command: "close", commandfor: "show-project"}, "Cancel")
  cancelBtn.classList.add("modal-btn")
  cancelBtn.addEventListener("click", () => {
	  showProject.close();
  })

  const saveBtn = newElement("button", {class: "save-btn", command: "close", commandfor: "show-project"}, "Save")
  saveBtn.classList.add("modal-btn")
  saveBtn.addEventListener("click", () => {
  	const title = document.querySelector("#project-title")
   	const description = document.querySelector("#project-description")
	  if (title !== "") {
		addProject(title, description)
    }

	  showProject.close();
  })

  modalButtons.appendChild(cancelBtn)
  modalButtons.appendChild(saveBtn)
}
