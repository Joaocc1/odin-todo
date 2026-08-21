import Project from "./models/Project.js"
import Todo from "./models/Todo.js"
import { projects, todos } from "./data/data.js"
import { add } from "date-fns/fp"

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
  return todos.map((todo) => {
    if (todo.projectId === projectId) {
      return todo
    }
  })
}

function addTodo(title, description, date, label, priority, projectId) {
 todos.push(new Todo(title, description,date, label, priority, projectId))
}

function getTodo(todoId) {
  return todos.find((todo) => todo.id === todoId)
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

 if (text && text !== "") {
    element.textContent = text
  }

 return element

}

export { addProject, removeProject, getProject, getProjects, getProjectTodos, addTodo, getTodo, removeTodo, getTodos, newElement }
