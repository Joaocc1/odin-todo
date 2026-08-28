import Project from "./models/Project.js"
import Todo from "./models/Todo.js"
import { projects, todos } from "./data/data.js"

function addProject(name, description) {
  projects.push(new Project(name.toLowerCase(), description))
}

function removeProject(projectId) {
  projects.splice(projects.indexOf(findProject(projectId)), 1)
}

function getProject(projectId) {
  return projects.find((project) => project.id === projectId)
}

function getProjects() {
  return projects
}

function getProjectTodos(projectId) {
  return todos.filter((todo) => todo.projectId === projectId)
}

function addTodo(title, description, date, priority, projectId) {

 const newTodo = new Todo(title, description, date, priority, projectId)

 if (date || date !== "") {
   newTodo.editDate(date)
  }

 todos.push(newTodo)
}

function getTodo(todoId) {
  return todos.find((todo) => todo.id === todoId)
}

function getTodosByDate(date) {
  const todos = getTodos()
  const filteredTodos = todos.filter((todo) => todo.date === date)

  return filteredTodos
}

function removeTodo(todoId) {
 todos.splice(todos.indexOf((todos.find((todo) => todo.id === todoId))) , 1)
}

function getTodos() {
  return todos
}

// function to generate html elements

function newElement(tag, attributes = {}, text) {
 const element = document.createElement(tag)

 for (const [key, value] of Object.entries(attributes)) {
   if (key === "class") {
     element.classList.add(value);
   } else {
     element.setAttribute(key, value)
	}
 }

 if (text) {
    element.textContent = text
  }

 return element

}

export { addProject, removeProject, getProject, getProjects, getProjectTodos, addTodo, getTodo, getTodosByDate, removeTodo, getTodos, newElement }
