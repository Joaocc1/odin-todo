import { format } from "date-fns"

// create a class that creates more todos
export default class Todo {

  constructor(title, description, date, priority, projectId) {
    this.title = title;
    this.description = description
    this.date = format(new Date(), "yyyy-MM-dd")
    this.priority = priority
    this.id = crypto.randomUUID()
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
    this.date = format(new Date(newDate), "yyyy-MM-dd")
  }
  editPriority(newPriority) {
    this.priority = newPriority
  }
  moveTodo(newProjectId) {
    this.projectId = newProjectId
  }
  toggleCompleted() {
    this.completed = !this.completed
  }
}
