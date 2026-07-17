import { format } from "date-fns"

// create an array that will be the default project for todos
const mainProject = []

// create a class that creates more projects
class Todo {

  constructor(title, description, date, label, priority) {
    this.title = title;
    this.description = description
    this.date = format(new Date(date), "dd/MM/yyyy")
    this.label = label
    this.priority = priority
    this.id = crypto.randomUUID()


  }
}

// testing generating todos using class
const todo = new Todo("title test", "this is what I have to do", "2026, 01, 08", "dev", 1)
mainProject.push(todo)

console.log(mainProject)

// create a class that creates todos
