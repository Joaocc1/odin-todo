// create a class that creates more projects
export default class Project {

  constructor(name, description) {
    this.name = name
    this.description = description
    // this.id = crypto.randomUUID()
    this.id = 1
    this.todos = []
  }

  editName(newName) {
    this.name = newName
  }
  editDescription(newDescription) {
    this.description = newDescription
  }

  getTodos() {
    return this.todos
  }

}
