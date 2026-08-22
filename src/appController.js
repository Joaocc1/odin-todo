import { addProject, getProject, getProjects, getProjectTodos, addTodo, getTodo, getTodos, moveTodo } from "./appServices.js"
import Navigation from "./views/Navigation.js"

export default function startApp() {
  // create default project
  addProject("inbox", "This is the default project")

  // testing logic
  addProject("Dev", "")
  const defaultId = getProjects()[0].id
  const newProjectId = getProjects()[1].id
  addTodo("test", "this is a test", "08 01 2026", "testing", 4, defaultId)
  addTodo("do something", "just do it", "08 31 2026", "testing", 1, defaultId)
  const firstTodoId = getTodos()[0].id
  getTodo(firstTodoId).editTitle("New title")
  // getTodo(firstTodoId).moveTodo(newProjectId)

  // render ui
  Navigation()
}
