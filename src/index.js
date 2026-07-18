import { format } from "date-fns"

// create an array that will be the default project for todos
const projects = [
  {
    "name": "default",
    "todos": []
  }
]


// create a class that creates more projects
class Project {

  constructor(name) {
    this.name = name
    this.todos = []
    // !! After testing in the console uncomment the line below and delete the next one
    // this.id = crypto.randomUUID()
    this.id = 1
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

  constructor(title, description, date, label, priority) {
    this.title = title;
    this.description = description
    this.date = format(new Date(date), "dd/MM/yyyy")
    this.label = label
    this.priority = priority
    // !! After testing in the console uncomment the line below and delete the next one
    // this.id = crypto.randomUUID()
    this.id = 1
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

// create functions that will create todos and projects and assign

function addProject(name) {
  projects.push(new Project(name.toLowerCase()))
}

function addTodo(title, description, date, label, priority, projectId) {

  projects.find((project) => project.id === projectId).todos.push(new Todo(title, description, date, label, priority))
}

// function to delete projects
function removeProject(projectId) {
  return projects.splice(projects.indexOf(findProject(projectId)), 1)
}

// functions to find specific todos and projects
function findProject(projectId) {
  return projects.find((project) => project.id === projectId)
}

function findTodo(todoId, projectId) {
  return findProject(projectId).todos.find((todo) => todo.id === todoId)
}


// ======== Testing =================

addProject("The Odin Project")

addTodo("Finish project", "Todo app project part of the odin project curriculum", "2026, 08, 01", "dev", 1, 1)

removeProject(1)

console.log(projects)



// ++++++++++ Next steps +++++++++++++
//
// 1. add a way to edit and delete todos and projects
// 2. refactor to modules
// 3. implement ui
// 4. implement local storage
//
// (optional) implement feature that gives option to recurring todos
