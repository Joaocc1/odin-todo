import todosPage from "./todosPage.js";
import sidebar from "./sidebar.js";
import { getProject, getProjects, getProjectTodos, getTodos, getTodosByDate } from "../appServices.js";
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

function clearPage() {
  const content = document.querySelector("#content")
  const contentContainer = document.querySelector(".content-container")

  content.removeChild(contentContainer)

}

export { todosPage, sidebar, renderPage, clearPage }
