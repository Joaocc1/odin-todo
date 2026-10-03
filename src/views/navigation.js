import todosPage from "./todosPage.js";
import sidebar from "./sidebar.js";
import addProjectModal from "./addProjectModal.js";
import { getProject, getProjects, getProjectTodos, getTodos, getTodosByDate, newElement } from "../appServices.js";
import { format } from "date-fns"

function renderPage(pageName, dataId) {

  let filteredTodos = []

  if (pageName === "project") {
    const projectName = getProject(dataId).name
    filteredTodos = getProjectTodos(dataId)

    todosPage(projectName, filteredTodos)

  } else {

    switch (pageName) {
      case "inbox":
        filteredTodos = getProjectTodos(getProjects()[0].id)
        todosPage("Inbox", filteredTodos)
        break;
      case "today":
        const dateToday = format(new Date(), "yyyy-MM-dd")
        filteredTodos = getTodosByDate(dateToday)
        todosPage("Today", filteredTodos)
        break;
      case "all":
        filteredTodos = getTodos()
        todosPage("All Todos", filteredTodos)
        break;
      default:
        console.log("There was an error")
        break;
    }

  }

}

function renderProjectsList() {
	const projectsList = document.querySelector(".projects-list")

	let child = projectsList.lastElementChild;
	while (child) {
		projectsList.removeChild(child);
		child = projectsList.lastElementChild;
	}

	for (let i = 1; i < getProjects().length; i++) {
		const projects = getProjects()
		const project = newElement("div", {class: "sidebar-btn"})
		project.addEventListener("click", () => {
    		clearPage()
      		renderPage("project", projects[i].id)
  		})
  		projectsList.appendChild(project)
    	const sidebarLeft = newElement("div", {class: "sidebar-left"})
     	project.appendChild(sidebarLeft)
        const sidebarBtnPara = newElement("p", {}, projects[i].name)
        sidebarLeft.appendChild(sidebarBtnPara)
	}
}

function clearPage() {
  const content = document.querySelector("#content")
  const contentContainer = document.querySelector(".content-container")

  content.removeChild(contentContainer)

}

export { todosPage, sidebar, addProjectModal, renderPage, renderProjectsList, clearPage }
