import Todo from "./Todo.js"

// create a class that creates more projects
export default class Project {

  constructor(name) {
    this.name = name
    this.todos = []
    this.id = crypto.randomUUID()
  }

  editName(newName) {
    this.name = newName
  }

  addTodo(title, description, date, label, priority) {
   this.todos.push(new Todo(title, description,date, label, priority, this.id))
  }

  findTodo(todoId) {
    this.todos.find((todo) => todo.id === todoId)
  }

  removeTodo(todoId) {
   this.todos.splice(this.todos.indexOf((this.todos.find((todo) => todo.id === todoId))) , 1)
  }
}
