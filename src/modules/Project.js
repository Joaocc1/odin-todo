import Todo from "./Todo.js"

// create a class that creates more projects
export default class Project {

  constructor(name) {
    this.name = name
    // this.id = crypto.randomUUID()
    this.id = 1
  }

  editName(newName) {
    this.name = newName
  }

}
