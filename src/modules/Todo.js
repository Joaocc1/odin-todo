import { format } from "date-fns"

// create a class that creates more todos
export default class Todo {

  constructor(title, description, date, label, priority, projectId) {
    this.title = title;
    this.description = description
    this.date = format(new Date(date), "dd/MM/yyyy")
    this.label = label
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
