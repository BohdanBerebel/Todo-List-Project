import {tasksArray} from "./addTask"
import {addDeleteButton} from "./deleteTask";
export {publishAllTasks, publishTask}

const main = document.querySelector("main");
const user = document.querySelector("#user-info:first-child");

function meanHeader() {
    let tasksQuantity = tasksArray.length;
    const newHeader = document.createElement("h2");
    newHeader.textContent = `You have ${tasksQuantity} tasks in general.`
    if (tasksQuantity == 1) newHeader.textContent = `You have ${tasksQuantity} task in general.`
    if (tasksQuantity === 0) {
        newHeader.textContent = 'So far, you are free';
    }
    main.appendChild(newHeader);
}

function publishTask(obj) {
    
    const main = document.querySelector("main");

    const div = document.createElement('div');
    main.appendChild(div);
    div.classList.add("task");
    
    const header = document.createElement('h3');
    header.textContent = obj.title;
    div.appendChild(header);
    
    const description = document.createElement('p');
    description.textContent = `Description: ${obj.description}`;
    div.appendChild(description);

    const day = document.createElement('p');
    day.textContent = `Date: ${obj.dueDate}`;
    div.appendChild(day);

    const priority = document.createElement('p');
    priority.textContent = `Priority: ${obj.priority}`;
    div.appendChild(priority);
    
    if(obj.priority == "High") {
        div.classList.add("highPriopity");
    } else if(obj.priority == "Low") {
        div.classList.add("lowPriopity");
    } else {
        div.classList.add("mediocrePriopity")
    }
    
}

const publishAllTasks = function() {
    main.innerHTML = "";
    meanHeader();
    tasksArray.forEach(element => {
        publishTask(element)
    })
    addDeleteButton();
    
}

user.addEventListener("click", (e) => {
    publishAllTasks();
})