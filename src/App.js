export default function App() {

  // create an array that will be the default project for todos
  const projects = []


  // Generate the default project folder
  addProject("default")


  // Functions
  function addProject(name) {
    projects.push(new Project(name.toLowerCase()))
  }

  function removeProject(projectId) {
    return projects.splice(projects.indexOf(findProject(projectId)), 1)
  }

  function findProject(projectId) {
    return projects.find((project) => project.id === projectId)
  }

  return projects
}
