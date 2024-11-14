import {tasksArray, Task} from "./addTask"
import { format } from "date-fns";
import {publishTask} from "./buildTaskDiv"
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
        header.textContent = `Today You have ${tasksNumber} task(s) to do`;

    });

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
