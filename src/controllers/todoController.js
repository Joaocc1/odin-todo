import Todo from "../models/Todo.js"
import { todos } from "../data/data.js"

function addTodo(title, description, date, label, priority, projectId) {
 todos.push(new Todo(title, description,date, label, priority, projectId))
}

function getTodo(todoId) {
  return todos.find((todo) => todo.id === todoId)
}

function removeTodo(todoId) {
 todos.splice(todos.indexOf((todos.find((todo) => todo.id === todoId))) , 1)
}

function getTodos() {
  return todos
}


export { addTodo, getTodo, removeTodo, getTodos, }
