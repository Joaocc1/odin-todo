import Project from "../models/Project.js"
import { projects } from "../data/data.js"

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

export {addProject, removeProject, getProject, getProjects}
