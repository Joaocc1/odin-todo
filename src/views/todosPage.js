import { getProjects, getProjectTodos, newElement, } from "../appServices.js"
import addTodoIcon from "../assets/add_2.png"
import todoModal from "./todoModal.js"

export default function todosPage(pageName, filteredTodos) {

  const allProjects = getProjects()
  const h1 = pageName

  const content = document.querySelector("#content")

  const contentContainer = newElement("div", {class: "content-container"})
  content.appendChild(contentContainer)

  const heading = newElement("h1", {}, h1)
  contentContainer.appendChild(heading)

  // Todo list
  const todoList = newElement("div", {class: "todo-list"})
  contentContainer.appendChild(todoList)

  filteredTodos.forEach((todo) => {
    const todoEntry = newElement("div", {class: "todo", "data-id": todo.id})
    todoList.appendChild(todoEntry)

    todoEntry.addEventListener("click", () => {
      const modal = document.querySelector("#show-todo")
      const modalTitle = document.querySelector("#todo-title")
      const modalDescription = document.querySelector("#todo-description")
      const modalProject = document.querySelector("#select-project")
      const modalDate = document.querySelector("#todo-date")
      const modalPrio = document.querySelector("#todo-priority")

      modalTitle.textContent = todo.title
      modalDescription.textContent = todo.description

      allProjects.forEach((project) => {
        const option = newElement("option", {value: project.id}, project.name)
        if (project.id === todo.projectId) {
          option.setAttribute("selected", "")
        }
        modalProject.appendChild(option)
      })

      console.log(modalProject.value)

      if (todo.date) {
        modalDate.value = todo.date
      }

      if (todo.priority) {
       modalPrio.value = todo.priority
      }

      modal.showModal()
    })

    const todoStatus = newElement("input", {class: "todo-complete", type: "radio", autocomplete: "off"})
    todoEntry.appendChild(todoStatus)
    const todoTitle = newElement("p", {class: "todo-title"}, todo.title)
    todoEntry.appendChild(todoTitle)

  })

  // Add todo
  const addTodo = newElement("div", {class: "add-todo"})
  contentContainer.appendChild(addTodo)
  addTodo.addEventListener("click", () => {
  })

  const addTodoImg = newElement("img", {src: addTodoIcon, alt: "icon for add todo button", width: "24px"})
  addTodo.appendChild(addTodoImg)
  const addTodoPara = newElement("p", {}, "Add todo")
  addTodo.appendChild(addTodoPara)

  // Load todo modal
  todoModal()

}
