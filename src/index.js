import App, { addProject, addTodo, getProjects, getTodo, getTodos } from "./App.js";


addTodo("test", "this is a test", "01 08 2026", "testing", 1, 1)
addProject("Dev", "")
console.log(getProjects())
getTodo(1).editTitle("New title")
console.log(getTodos())

// ++++++++++ Next steps +++++++++++++
//
// 1. Change todos to not be inside arrays of each project but just assign them a project
// 2. add a change project to todo class
// 1. implement ui
// 2. implement local storage
//
// (optional) implement feature that gives option to recurring todos
