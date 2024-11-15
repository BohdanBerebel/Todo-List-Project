import {Projects} from "./createProject"
export {detectingTaskInProjectsArray}

function detectingTaskInProjectsArray(taskObjFromDOM) {
    const arrayOfProjects = Projects.showProjects();
    const projectHeader = document.querySelector('main > :first-child');
    console.log(projectHeader)
    const projectName = projectHeader.textContent.slice(8, -8);
    console.log(projectName)
    let priority, date, description, title;
    for (let indexOfProject = 0; indexOfProject < arrayOfProjects.length; indexOfProject++) {
        if (arrayOfProjects[indexOfProject][0].projectTitle === projectName) {
            for (let indexOfTask = 1; indexOfTask < arrayOfProjects.length; indexOfTask++) {
                priority = taskObjFromDOM.children[3].textContent.slice(10);
                date = taskObjFromDOM.children[2].textContent.slice(6);
                description = taskObjFromDOM.children[1].textContent.slice(13);
                title = taskObjFromDOM.children[0].textContent;
                if( title === arrayOfProjects[indexOfProject][indexOfTask].title && description === arrayOfProjects[indexOfProject][indexOfTask].description &&
                    date === `${arrayOfProjects[indexOfProject][indexOfTask].dueDate}` && priority === arrayOfProjects[indexOfProject][indexOfTask].priority) {
                    return {"indexOfProject": indexOfProject, "indexOfTask": indexOfTask}
                }
            }
        }
    }
}