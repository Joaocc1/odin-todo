import { newElement } from "../appServices.js";
import SettingsIcon from "../assets/settings.png"
import AddBoxIcon from "../assets/add_box.png"
import InboxIcon from "../assets/inbox.png"
import CalendarIcon from "../assets/calendar.png"
import AllTodosIcon from "../assets/all_inclusive.png"
import AddProjectIcon from "../assets/add.png"
import { TodosPage, renderPage } from "./Navigation.js";

export default function Sidebar() {
  const sidebar = document.querySelector("#sidebar")

  // Sidebar main
  const sidebarMain = newElement("div", {class: "sidebar-main"})
  sidebar.appendChild(sidebarMain)

  // Sidebar Header
  const sidebarHeader = newElement("div", {class: "sidebar-header"})
  sidebarMain.appendChild(sidebarHeader)

  const sidebarHeaderLeft = newElement("div", {class: "sidebar-left"})
  sidebarHeader.appendChild(sidebarHeaderLeft)

  const logo = newElement("h1", {class: "logo"}, "Todo")
  sidebarHeaderLeft.appendChild(logo)

  const sidebarHeaderRight = newElement("div", {class: "sidebar-right"})
  sidebarHeaderRight.classList.add("settings")
  sidebarHeader.appendChild(sidebarHeaderRight)

  const imgSettings = newElement("img", {src: SettingsIcon, alt: "icon for settings", width: "24px"})
  sidebarHeaderRight.appendChild(imgSettings)

  // Sidebar todos
  const sidebarTodos = newElement("div", {class: "sidebar-todos"})
  sidebarMain.appendChild(sidebarTodos)

  const sidebarBtnAdd = newElement("div", {class: "sidebar-btn"})
  sidebarTodos.appendChild(sidebarBtnAdd)
  const sidebarLeftAdd = newElement("div", {class: "sidebar-left"})
  sidebarBtnAdd.appendChild(sidebarLeftAdd)
  const imgAdd = newElement("img", {src: AddBoxIcon, alt: "icon for add button", width: "24px", height: "24px"})
  sidebarLeftAdd.appendChild(imgAdd)
  const sidebarBtnAddPara = newElement("p", {class: "add-btn"}, "Add todo")
  sidebarLeftAdd.appendChild(sidebarBtnAddPara)

  const sidebarBtnInbox = newElement("div", {class: "sidebar-btn"})
  sidebarBtnInbox.addEventListener("click", () => renderPage(TodosPage))
  sidebarTodos.appendChild(sidebarBtnInbox)
  const sidebarLeftInbox = newElement("div", {class: "sidebar-left"})
  sidebarBtnInbox.appendChild(sidebarLeftInbox)
  const imgInbox = newElement("img", {src: InboxIcon, alt: "icon for inbox button", width: "16px"})
  sidebarLeftInbox.appendChild(imgInbox)
  const sidebarBtnInboxPara = newElement("p", {}, "Inbox")
  sidebarLeftInbox.appendChild(sidebarBtnInboxPara)

  const sidebarBtnToday = newElement("div", {class: "sidebar-btn"})
  sidebarTodos.appendChild(sidebarBtnToday)
  const sidebarLeftToday = newElement("div", {class: "sidebar-left"})
  sidebarBtnToday.appendChild(sidebarLeftToday)
  const imgCalendar = newElement("img", {src: CalendarIcon, alt: "icon for today button", width: "16px"})
  sidebarLeftToday.appendChild(imgCalendar)
  const sidebarBtnTodayPara = newElement("p", {}, "Today")
  sidebarLeftToday.appendChild(sidebarBtnTodayPara)

  const sidebarBtnAll = newElement("div", {class: "sidebar-btn"})
  sidebarTodos.appendChild(sidebarBtnAll)
  const sidebarLeftAll = newElement("div", {class: "sidebar-left"})
  sidebarBtnAll.appendChild(sidebarLeftAll)
  const imgAll = newElement("img", {src: AllTodosIcon, alt: "icon for all todos button", width: "16px"})
  sidebarLeftAll.appendChild(imgAll)
  const sidebarBtnAllPara = newElement("p", {}, "All todos")
  sidebarLeftAll.appendChild(sidebarBtnAllPara)

  // Sidebar projects
  const sidebarProjects = newElement("div", {class: "projects"})
  sidebarMain.appendChild(sidebarProjects)

  const sidebarProjectsHeader = newElement("div", {class: "sidebar-btn"})
  sidebarProjectsHeader.classList.add("projects-header")
  sidebarProjects.appendChild(sidebarProjectsHeader)
  const sidebarProjectsHeaderPara = newElement("p", {class: "sidebar-left"}, "Projects")
  sidebarProjectsHeader.appendChild(sidebarProjectsHeaderPara)
  const addProjectBtn = newElement("div", {class: "add-project"})
  sidebarProjectsHeader.appendChild(addProjectBtn)
  const addProjectImg = newElement("img", {src: AddProjectIcon, alt: "icon for add project button"})
  addProjectBtn.appendChild(addProjectImg)


  // Footer
  const footer = newElement("div", {class: "footer"})
  sidebar.appendChild(footer)
  const footerBtn = newElement("div", {class: "sidebar-btn"})
  footer.appendChild(footerBtn)
  const footerBtnPara = newElement("p", {class: "sidebar-left"}, "About")
  footerBtn.appendChild(footerBtnPara)

}
