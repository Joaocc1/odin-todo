// create an array that will be the default project for todos
const mainProject = []

// create a class that creates more projects
class Todo {

  constructor(title, description, date, label, priority, id) {
    this.title = title;
    this.description = description
    this.date = date
    this.label = label
    this.priority = priority
    this.id = id
    // will need to take consideration at date an id as they are generated

  }
}

// testing generating todos using class
const todo = new Todo("title test", "this is what I have to do", "dev", "today", 1, 1)
mainProject.push(todo)

console.log(mainProject)

// create a class that creates todos
