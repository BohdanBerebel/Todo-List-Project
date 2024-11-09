export {tasksArray, Task}
import { publishAllTasks } from "./buildTaskDiv";
import {addDeleteButton} from "./deleteTask"

const addingNewTaskButton = document.querySelector("nav > div li:nth-of-type(1)");
const dialogue = document.querySelector("dialog");
const close = document.querySelector("dialog img");

const title = document.querySelector(`dialog input[type="text"]`);
const description = document.querySelector(`dialog textarea`);
const date = document.querySelector(`dialog input[type="date"]`);
const priority = document.querySelector(`dialog select`);
const acceptTaskButton = document.querySelector(`dialog button`);

class Task {

    static #tasksArray = []

    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        Task.#tasksArray.push(this)
    }

    static showTaskArray() {
        return Task.#tasksArray
    }
}

new Task("Do HomeWork", "Math and English", "11-10-2024", "High");
new Task("Clearance", "at home: kitchen, living room, and bedroom", "12-10-2024", "Mediocre");
new Task("Reading", "Harry Potter", "31-12-2024", "Low");

const tasksArray = Task.showTaskArray();

addingNewTaskButton.addEventListener("click", (e) => {
    dialogue.show();
})

close.addEventListener("click", (e) => {
    dialogue.close();
})

acceptTaskButton.addEventListener("click", (e) => {
    if (title.value == "" || description.value  == "" || date.value == "") return alert("All fields must be filled out")
    new Task(title.value, description.value, date.value, priority.value);
    title.value = "";
    description.value  = "";
    date.value = "";
    publishAllTasks();
    dialogue.close();
})