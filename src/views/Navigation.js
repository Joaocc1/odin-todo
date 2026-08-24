import TodosPage from "./TodosPage.js";
import Sidebar from "./Sidebar.js";

function renderPage(page) {
  const content = document.querySelector("#content")
  const contentContainer = document.querySelector(".content-container")

  content.removeChild(contentContainer)

  page()
}

export { TodosPage, Sidebar, renderPage }
