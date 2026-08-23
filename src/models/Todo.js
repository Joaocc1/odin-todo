import { format } from "date-fns"

// create a class that creates more todos
export default class Todo {

  constructor(title, description, date, priority, projectId) {
    this.title = title;
    this.description = description
    this.date = format(new Date(), "yyyy-MM-dd")
    this.labels = []
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
  addLabel(newLabel) {
    this.labels.push(newLabel)
  }
  removeLabel(labelInput) {
    this.labels.splice(this.labels.indexOf((this.labels.find((label) => {
      label === labelInput
    }))), 1)
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
