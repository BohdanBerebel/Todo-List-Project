import "./styles.css";
import {publishAllTasks} from "./buildTaskDiv"
import {} from "./createProject"
import {addItemsToProjectsList, buildProjectPage} from "./showProjects"
import {Projects} from "./createProject"
import {addEventListenersToProjectList} from "./showSeparateProject"
import {} from "./todayTasksUsingmanageLocalStorage"

const showProjects = document.querySelector(`#projectsMenu > :first-child`)

publishAllTasks();
addItemsToProjectsList();
addEventListenersToProjectList()

showProjects.addEventListener("click", (e) => {
    buildProjectPage();
})