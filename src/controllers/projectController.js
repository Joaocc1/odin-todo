import Project from "../models/Project.js"
import { projects, todos } from "../data/data.js"

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

export {addProject, removeProject, getProject, getProjects, getProjectTodos}
