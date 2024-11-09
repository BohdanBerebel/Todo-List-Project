import "./styles.css";
import {publishAllTasks} from "./buildTaskDiv"
import {} from "./createProject"
import {addItemsToProjectsList, buildProjectPage} from "./showProjects"
import {Projects} from "./createProject"

const showProjects = document.querySelector(`#ProjectsList`)

publishAllTasks();
addItemsToProjectsList();

showProjects.addEventListener("click", (e) => {
    buildProjectPage();
})