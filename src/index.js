import App from "./App.js"

App()


// create todos and projects


function addTodo(title, description, date, label, priority, projectId) {

  projects.find((project) => project.id === projectId).todos.push(new Todo(title, description, date, label, priority, projectId))
}

// delete projects and todos

function removeTodo(projectId, todoId) {
  return findTodo(todoId, projectId).removeTodo(todoId)
}

// find specific todos and projects

function findTodo(todoId, projectId) {
  return findProject(projectId).todos.find((todo) => todo.id === todoId)
}

// loop through all the todos and return them

function getTodos() {
  const allTodos = []
  projects.map((project) => {
    project.todos.forEach((todo) => allTodos.push(todo))
  })
  return allTodos
}


// ======== Testing =================




// ++++++++++ Next steps +++++++++++++
//
// 1. add a way to edit and delete todos and projects
// 2. refactor to modules
// 3. implement ui
// 4. implement local storage
//
// (optional) implement feature that gives option to recurring todos
