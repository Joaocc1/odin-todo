import Project from "./modules/Project.js"
import Todo from "./modules/Todo.js"

// create an array that will be the default project for todos
const projects = []
const todos = []

// Generate the default project folder
addProject("default", "")

// Functions
function addProject(name, description) {
  projects.push(new Project(name.toLowerCase(), description))
}

function addTodo(title, description, date, label, priority, projectId) {
 todos.push(new Todo(title, description,date, label, priority, projectId))
}

function removeProject(projectId) {
  projects.splice(projects.indexOf(findProject(projectId)), 1)
}

function getProject(projectId) {
  return projects.find((project) => project.id === projectId)
}

function getTodo(todoId) {
  return todos.find((todo) => todo.id === todoId)
}

function removeTodo(todoId) {
 todos.splice(todos.indexOf((todos.find((todo) => todo.id === todoId))) , 1)
}

function getProjects() {
  return projects
}

function getTodos() {
  return todos
}

function getProjectTodos(projectId) {
 return todos.map((todo) => todo.projectId === projectId)
}

// testing
//
// addProject("new project")
// console.log(projects)
// addTodo("test", "this is a test", "01 08 2026", "testing", 1, 1)

// const allTodos = getTodos()
// console.log(allTodos)

// console.log(getProjects())

export { addProject, addTodo, removeProject, getProject, getTodo, removeTodo, getProjects, getTodos, getProjectTodos }
