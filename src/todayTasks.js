import {tasksArray, Task} from "./addTask"
import { format } from "date-fns";
import {publishTask} from "./buildTaskDiv"
import {Projects} from "./createProject"
import {publishProject} from "./showProjects"
export {}

const todayLi = document.querySelector("nav ul > li:nth-of-type(4)")

todayLi.addEventListener("click", (e) => {
    buildTodayPage()
})

function buildTodayPage() {

    const todayDate = format(new Date(), 'dd MMM yyyy');

    const main = document.querySelector("main");
    main.innerHTML = "";

    const header = document.createElement("h3");
    main.appendChild(header);

    let tasksNumber = 0;
    tasksArray.forEach(element => {
        if (element.dueDate === todayDate) {
            publishTask(element);
            tasksNumber++;
        }
        if (tasksNumber) {
            header.textContent = `Today You have ${tasksNumber} task(s) to do beyond projects`;
        }

    });

    const projectsArray = Projects.showProjects();
    const arrayTodaysTasks = [];

    projectsArray.forEach(element => {
        arrayTodaysTasks.push(seekingProjectsTasks(element));
    })

    addProjectsTasksToTodaysTasks(arrayTodaysTasks);

}

function seekingProjectsTasks(project) {

    const todayDate = format(new Date(), 'dd MMM yyyy');

    const todaysTasksArray = [];

    for (let task of project) {
        if (task.dueDate === todayDate) {
            if(!(todaysTasksArray[0] == project[0])) {
                todaysTasksArray.push(project[0])
            }
            todaysTasksArray.push(task)
            }
    }
    return todaysTasksArray;
}

function addProjectsTasksToTodaysTasks(projectsTasksArray) {
    const main = document.querySelector("main");
    const header = document.createElement("h2");
    let numberOfProjectsTasks = 0;
    for (let i = 0; i < projectsTasksArray.length; i++) {
        if (projectsTasksArray[i].length) {
            main.appendChild(header);
        }
    }
    for (let i = 0; i < projectsTasksArray.length; i++) {
        if (!projectsTasksArray[i].length) continue;
        publishProject(projectsTasksArray[i]);
        numberOfProjectsTasks += projectsTasksArray[i].length - 1;
    }
    if (numberOfProjectsTasks) header.textContent = `For today, you have ${numberOfProjectsTasks} task(s) within the following project(s) to do`;
}

// localStorage.setItem("tasks", JSON.stringify([new Task("Walking", "At the park", format("09-01-2024", 'dd MMM yyyy'), "Low")]));
// console.log(localStorage.getItem("tasks"))

// let array = JSON.parse(localStorage.getItem("tasks"));
// console.log(array);
// array.push(new Task("Running", "At the beach", format("07-01-2024", 'dd MMM yyyy'), "Mediocre")); 
// localStorage.tasks = JSON.stringify(array);
// array = JSON.parse(localStorage.getItem("tasks"));
// console.log(array);
// localStorage.clear()
// console.log(localStorage.getItem("tasks"))
