import {tasksArray} from "./addTask"
export {publishAllTasks}

const tasks = document.querySelector("#tasks");
const header = document.querySelector("#tasks > h2");

function meanHeader() {
    let tasksQuantity = tasksArray.length;
    header.textContent = `You have ${tasksQuantity} tasks in general.`
    if (tasksQuantity == 1) header.textContent = `You have ${tasksQuantity} task in general.`
    if (tasksQuantity === 0) {
        header.textContent = 'So far, you are free';
        tasks.classList = "free"
    }
    tasks.classList = "";
}

function publishTask(obj) {
    const div = document.createElement('div');
    tasks.appendChild(div);
    
    const header = document.createElement('h3');
    header.textContent = obj.title;
    div.appendChild(header);
    
    const description = document.createElement('p');
    description.textContent = obj.description;
    div.appendChild(description);

    const day = document.createElement('p');
    day.textContent = obj.dueDate;
    div.appendChild(day);

    const priority = document.createElement('p');
    priority.textContent = obj.priority;
    div.appendChild(priority);
}

const publishAllTasks = function() {
    meanHeader();
    tasksArray.forEach(element => {
    publishTask(element)
    })
}

publishAllTasks();