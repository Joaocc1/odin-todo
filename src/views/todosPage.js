import { getProjects, getProjectTodos, newElement, } from "../appServices.js"
import addTodoIcon from "../assets/add_2.png"
import { generateAddModal, generateModal } from "./navigation.js"

export default function todosPage(pageName, filteredTodos) {

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
		generateModal(todo);
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
  	generateAddModal()
  })

  const addTodoImg = newElement("img", {src: addTodoIcon, alt: "icon for add todo button", width: "24px"})
  addTodo.appendChild(addTodoImg)
  const addTodoPara = newElement("p", {}, "Add todo")
  addTodo.appendChild(addTodoPara)
}
