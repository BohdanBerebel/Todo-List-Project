import {tasksArray} from "./addTask"
import {pickingTaskFromArray} from "./seekingTaskInArray"
import {publishAllTasks} from "./buildTaskDiv"
export {addDeleteButton}

function addDeleteButton() {
    
    const taskCells = document.querySelectorAll(".task");
    
    for (let task of [...taskCells]) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Detele this task";
        task.appendChild(deleteButton);
        
        deleteButton.addEventListener("click", (e) => {
            tasksArray.splice(pickingTaskFromArray(e.target.parentElement)["index"], 1);
            e.target.parentElement.remove();
            publishAllTasks();
        })
    }
}
