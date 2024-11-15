import {tasksArray} from "./addTask"
export {pickingTaskFromArray}

function pickingTaskFromArray(task) {
    
    for (let item of tasksArray) {

        let priority = task.children[3].textContent.slice(10);
        let date = task.children[2].textContent.slice(6);
        let description = task.children[1].textContent.slice(13);

        if( task.children[0].textContent === item.title && description === item.description &&
            date === `${item.dueDate}` && priority === item.priority) {
            let index = tasksArray.indexOf(item);
            return {"index": index};
        }
    }
}
