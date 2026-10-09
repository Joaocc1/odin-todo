import todosPage from "./todosPage.js";
import sidebar from "./sidebar.js";
import addProjectModal from "./addProjectModal.js";
import todoModal from "./todoModal.js";
import { addTodo, getProject, getProjects, getProjectTodos, getTodo, getTodos, getTodosByDate, newElement } from "../appServices.js";
import { format } from "date-fns"

let currentPage = "";


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
        setCurrentPage("inbox")
        break;
      case "today":
        const dateToday = format(new Date(), "yyyy-MM-dd")
        filteredTodos = getTodosByDate(dateToday)
        todosPage("Today", filteredTodos)
        setCurrentPage("today")
        break;
      case "all":
        filteredTodos = getTodos()
        todosPage("All Todos", filteredTodos)
        setCurrentPage("all")
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

function generateModal(todo) {
	todoModal()
	const contentContainer = document.querySelector(".content-container")
	const allProjects = getProjects()
	const modal = document.querySelector("#show-todo")
    const modalTitle = document.querySelector("#todo-title")
    const modalDescription = document.querySelector("#todo-description")
    const modalProject = document.querySelector("#select-project")
    const modalDate = document.querySelector("#todo-date")
    const modalPrio = document.querySelector("#todo-priority")

    modal.setAttribute("data-id", todo.id)
    modalTitle.textContent = todo.title
    modalDescription.textContent = todo.description

    allProjects.forEach((project) => {
    	const option = newElement("option", {value: project.id}, project.name)
        if (project.id === todo.projectId) {
          option.setAttribute("selected", "")
        }
        modalProject.appendChild(option)
    })

    if (todo.date) {
    	modalDate.value = todo.date
    }

    if (todo.priority) {
       modalPrio.value = todo.priority
    }

    modal.showModal()
    // remove modal on close
	modal.addEventListener("close", () => {
		contentContainer.removeChild(modal);
    })
}

function generateAddModal() {
	todoModal()
	const contentContainer = document.querySelector(".content-container")
	const allProjects = getProjects()
	const modal = document.querySelector("#show-todo")
    const modalProject = document.querySelector("#select-project")

    allProjects.forEach((project) => {
    	const option = newElement("option", {value: project.id}, project.name)
        modalProject.appendChild(option)
    })

    modal.showModal()
    // remove modal on close
	modal.addEventListener("close", () => {
		contentContainer.removeChild(modal);
    })
}

function addTodoHandle(dataId, title, description, project, date, priority) {
	const currentPage = getCurrentPage()

	if (dataId !== "") {
		const todoId = dataId;
		const todo = getTodo(todoId);
		if (title || title !== "") { todo.editTitle(title) }
		if (description || description !== "") { todo.editDescription(description) }
		if (description || description !== "") { todo.editDescription(description) }
		if (project || project !== "") { todo.moveTodo(project) }
		if (date || date !== "") { todo.editDate(date) }
		if (priority || priority !== "") { todo.editPriority(priority) }
	} else {
		addTodo(title, description, date, priority, project)
	}

	if (currentPage === "inbox" || currentPage === "today" || currentPage === "all") {
		clearPage();
		renderPage(currentPage, "")
	} else {
		clearPage();
		renderPage("", currentPage)
	}
}

function clearPage() {
  const content = document.querySelector("#content")
  const contentContainer = document.querySelector(".content-container")

  content.removeChild(contentContainer)

}

function setCurrentPage(page) {
	currentPage = page;
}

function getCurrentPage() {
	return currentPage;
}

export { todosPage, sidebar, addProjectModal, renderPage, renderProjectsList, generateModal, generateAddModal, addTodoHandle, clearPage, setCurrentPage, getCurrentPage }
