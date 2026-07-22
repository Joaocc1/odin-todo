function App() {

  // create an array that will be the default project for todos
  const projects = []


  // Generate the default project folder
  addProject("default")

  return projects
}

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

// loop through all the todos and return them

function getTodos() {
  const allTodos = []
  projects.map((project) => {
    project.todos.forEach((todo) => allTodos.push(todo))
  })
  return allTodos
}

export default App
