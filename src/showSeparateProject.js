import {Projects} from "./createProject"
import {publishTask} from "./buildTaskDiv"
import {addItemsToProjectsList, buildProjectPage} from "./showProjects"
import {addTaskToProject} from "./createProject"
import { format } from "date-fns";
import {detectingTaskInProjectsArray} from "./seekingTaskInProjectsArray"
export {addEventListenersToProjectList, buildProjectOnMainPage}


function buildProjectOnMainPage(index) {
    const projectsArray = Projects.showProjects();

    const main = document.querySelector('main');
    main.innerHTML = "";

    const footer = document.createElement('h1');
    footer.textContent = `This is ${projectsArray[index][0].projectTitle} project`;
    main.appendChild(footer);
    
    for (let i = 1; i < projectsArray[index].length; i++ ) {
        publishTask(projectsArray[index][i]);
    } 

    addDeleteButton();

    if (projectsArray[index].length === 1) {
        const notification = document.createElement('p');
        notification.textContent = "No tasks yet";
        main.appendChild(notification);
    }

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = "Add new task";
    main.appendChild(addTaskButton);

    addTaskButton.addEventListener("click", (e) => {

        addTaskButton.setAttribute("disabled", "")
        const addNewTaskDiv = document.createElement("div");
        addNewTaskDiv.classList.add("task");
        main.appendChild(addNewTaskDiv);

        const ul = document.createElement("ul");

        addNewTaskDiv.appendChild(ul);

        const inputArrays = [];

        for (let i = 0; i < 3; i++) {
            const li = document.createElement("li");
            ul.appendChild(li);

            const label = document.createElement("label");
            const input = document.createElement("input");
            input.setAttribute("type", "text")
            
            if(i === 0) label.textContent = "Title: "
            if(i === 1) label.textContent = "Description: "
            if(i === 2) {
                label.textContent = "Date: "
                input.setAttribute("type", "date")
            } 
            li.appendChild(label);
            li.appendChild(input);
            inputArrays.push(input);
        }
        const li = document.createElement("li");
        const label = document.createElement("label");

        ul.appendChild(li);

        li.appendChild(label);

        label.textContent = "Choose priority:"
        const select = document.createElement("select");
        
        li.appendChild(select);
        
        for (let i = 0; i < 3; i++) {
            const option = document.createElement("option");
            if(i === 0) {
                option.textContent = "High"
                option.setAttribute("value", "High")
            } else if(i === 1) {
                option.textContent = "Low"
                option.setAttribute("value", "Low")
            } else {
                option.textContent = "Mediocre"
                option.setAttribute("value", "Mediocre")
            } 
            select.appendChild(option);
        }
        
        const addNewTaskButton = document.createElement('button');
        addNewTaskButton.textContent = "Add the task";
        addNewTaskDiv.appendChild(addNewTaskButton);

        
        addNewTaskButton.addEventListener("click", (e) => {
            if (inputArrays[0].value == "" || inputArrays[1].value  == "" || inputArrays[2].value == "") return alert("No, no, no... Try again")
            new addTaskToProject(projectsArray[index], inputArrays[0].value, inputArrays[1].value, format(inputArrays[2].valueAsDate, 'dd MMM yyyy'), select.value);
            buildProjectOnMainPage(index);
            addItemsToProjectsList();
        })

    })

}

function addEventListenersToProjectList() {
    const separateProjects = document.querySelectorAll("#ProjectsList > div");

    for (let i = 0; i < separateProjects.length; i++ ) { 
        separateProjects[i].addEventListener("click", (e) => {
            buildProjectOnMainPage(i);
        })
    }
}

const addNewProject = document.querySelector(`#addNewProject`)
const main = document.querySelector(`main`)

addNewProject.addEventListener("click", (e) => {
    main.innerHTML = "";
    const div = document.createElement("div");
    const label = document.createElement("label");    
    const input = document.createElement("input");
    const button = document.createElement("button");
    
    div.classList.add("inputMenu")

    label.textContent = "Enter name of your new project:"

    button.textContent = "Create the new project"

    main.appendChild(div)
    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(button)

    button.addEventListener("click", (e) => {

        new Projects(input.value);
        addItemsToProjectsList();
        buildProjectPage();
    })
    
})

function addDeleteButton() {
    const projectsArray = Projects.showProjects();
    const taskCells = document.querySelectorAll(".task");
    
    for (let task of [...taskCells]) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Detele this task";
        task.appendChild(deleteButton);
        
        deleteButton.addEventListener("click", (e) => {
            const projectsArray = Projects.showProjects();
            const taskToDelete = detectingTaskInProjectsArray(e.target.parentElement);
            console.log(projectsArray)
            projectsArray[taskToDelete["indexOfProject"]].splice(taskToDelete["indexOfTask"], 1);
            console.log(projectsArray);
            addItemsToProjectsList();
            buildProjectOnMainPage(taskToDelete["indexOfProject"]);
            addDeleteButton()
        })
    }
}