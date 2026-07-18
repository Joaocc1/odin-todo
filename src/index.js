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
  }

  editName(newName) {
    this.name = newName
  }

  deleteTodo(todoId) {
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
    this.id = crypto.randomUUID()
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

function addTodo(title, description, date, label, priority, projectName) {

  projects.find((project) => project.name === projectName).todos.push(new Todo(title, description, date, label, priority))
}

// functions to find specific todos and projects
function findProject(projectName) {
  return projects.find((project) => project.name === projectName)
}

function findTodo(todoName, projectName) {
  return findProject(projectName).todos.find((todo) => todo.title === todoName)
}


// ======== Testing =================

addProject("The Odin Project")

addTodo("Finish project", "Todo app project part of the odin project curriculum", "2026, 08, 01", "dev", 1, "the odin project")


console.log(findProject("the odin project"))
console.log(findTodo("Finish project", "the odin project"))

findTodo("Finish project", "the odin project").editTitle("Finish this odin project")

findTodo("Finish this odin project", "the odin project").toggleCompleted()

findProject("the odin project").deleteTodo(findTodo("Finish this odin project", "the odin project").id)

console.log(projects)

// ++++++++++ Next steps +++++++++++++
//
// 1. add a way to edit and delete todos and projects
// 2. refactor to modules
// 3. implement ui
// 4. implement local storage
//
// (optional) implement feature that gives option to recurring todos
