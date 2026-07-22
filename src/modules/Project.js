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

  removeTodo(todoId) {
   this.todos.splice(this.todos.indexOf((this.todos.find((todo) => todo.id === todoId))) , 1)
  }
}
