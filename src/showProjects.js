import {Projects} from "./createProject"
import {publishAllTasks} from "./buildTaskDiv"
import {addDeleteButton} from "./deleteTask";
import {addEventListenersToProjectList} from "./showSeparateProject"
export {addItemsToProjectsList, buildProjectPage, publishProject}

const projectsArray = Projects.showProjects();

const addItemsToProjectsList = function() {
    const projectsList = document.querySelector("#ProjectsList");

    ProjectsList.innerHTML = "";

    projectsArray.forEach(element => {
        
        const div = document.createElement("div");
        div.classList.add("project");
        projectsList.appendChild(div);
    
        const title = document.createElement("h4");
        title.textContent = element[0].projectTitle;
        div.appendChild(title);

        const numberOfTasks = document.createElement("p");
        numberOfTasks.textContent = `Number of tasks: ${element.length - 1}`;
        div.appendChild(numberOfTasks);

    })

    addEventListenersToProjectList()
}

const buildProjectPage = function() {
    const main = document.querySelector('main');
    main.innerHTML = "";

    const footer = document.createElement('h1');
    footer.textContent = `You have ${projectsArray.length} project(s)`;
    main.appendChild(footer);

    projectsArray.forEach((element) => {

        publishProject(element);
    })
    const backToTasksButton = document.createElement('button');
    backToTasksButton.textContent = `Back to tasks`;
    main.appendChild(backToTasksButton);

    backToTasksButton.addEventListener("click", (e) => {
        main.innerHTML = "";
        publishAllTasks();
    })

}

function publishProject(project){
    const main = document.querySelector('main');

    const div = document.createElement('div');
        main.appendChild(div);
        div.classList.add("projectBig");

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = `Project: ${project[0].projectTitle}`;
        div.appendChild(projectTitle);

        if(project[1] == undefined) {
            const notification = document.createElement('p');
            notification.textContent = "No tasks yet";
            div.appendChild(notification);
            return
        }

        if(project.length > 1) {

            project.forEach((obj, index) =>  {
                
                if(index === 0) return;

                const task = document.createElement('div');
                div.appendChild(task);
                task.classList.add("projectTask");

                const header = document.createElement('h4');
                header.textContent = obj.title;
                task.appendChild(header);
        
                const description = document.createElement('p');
                description.textContent = `Description: ${obj.description}`;
                task.appendChild(description);
        
                const day = document.createElement('p');
                day.textContent = `Date: ${obj.dueDate}`;
                task.appendChild(day);
        
                const priority = document.createElement('p');
                priority.textContent = `Priority: ${obj.priority}`;
                task.appendChild(priority);
                
                if(obj.priority == "High") {
                    task.classList.add("highPriopity");
                } else if(obj.priority == "Low") {
                    task.classList.add("lowPriopity");
                } else {
                    task.classList.add("mediocrePriopity")
                }
            })
        }
}