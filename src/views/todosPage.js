import { getProjects, getProjectTodos, newElement, } from "../appServices.js"
import addTodoIcon from "../assets/add_2.png"
import editIcon from "../assets/edit.png"
import delIcon from "../assets/delete.png"
import { completeTodo, generateAddModal, generateModal } from "./navigation.js"

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

	todoEntry.addEventListener("click", (e) => {
		if (e.target !== todoStatus) {
			generateModal(todo);
		}
    })

	const todoLeft = newElement("div", {class: "todo-left"})
	todoEntry.appendChild(todoLeft)

    const todoStatus = newElement("input", {class: "todo-complete", type: "radio", autocomplete: "off"})
	todoStatus.addEventListener("click", () => {
		completeTodo(todo)
    })
    todoLeft.appendChild(todoStatus)

    const todoTitle = newElement("p", {class: "todo-title"}, todo.title)
    todoLeft.appendChild(todoTitle)

    const todoRight = newElement("div", {class: "todo-right"})
    todoEntry.appendChild(todoRight)

    const todoEdit = newElement("div", {class: "todo-edit"})
    todoEdit.classList.add("todo-editing")
    todoRight.appendChild(todoEdit)
    const editImg = newElement("img", {src: editIcon, alt: "icon to edit todo"})
    todoEdit.appendChild(editImg)

	const todoDelete = newElement("div", {class: "todo-delete"})
	todoDelete.classList.add("todo-editing")
	todoDelete.addEventListener("click", () => {

	})
	todoRight.appendChild(todoDelete)
	const deleteImg = newElement("img", {src: delIcon, alt: "icon to delete todo"})
	todoDelete.appendChild(deleteImg)
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
