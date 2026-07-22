import { format } from "date-fns"


// create a class that creates more projects
class Project {

  constructor(name) {
    this.name = name
    this.todos = []
    this.id = crypto.randomUUID()
  }

  editName(newName) {
    this.name = newName
  }

  removeTodo(todoId) {
   this.todos.splice(this.todos.indexOf((this.todos.find((todo) => todo.id === todoId))) , 1)
  }
}

// create a class that creates more todos
class Todo {

  constructor(title, description, date, label, priority, projectId) {
    this.title = title;
    this.description = description
    this.date = format(new Date(date), "dd/MM/yyyy")
    this.label = label
    this.priority = priority
    this.id = crypto.randomUUID()
    this.project = findProject(projectId.name)
    this.projectId = projectId
    this.completed = false
  }

  editTitle(newTitle) {
    this.title = newTitle
  }
  editDescription(newDescription) {
    this.description = newDescription
  }
  editDate(newDate) {
    this.date = format(new Date(newDate), "dd/MM/yyyy")
  }
  editLabel(newLabel) {
    this.label = newLabel
  }
  editPriority(newPriority) {
    this.priority = newPriority
  }
  toggleCompleted() {
    this.completed = !this.completed
  }
}



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
