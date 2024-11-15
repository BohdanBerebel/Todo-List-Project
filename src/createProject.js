import { format } from "date-fns";
export {Projects, addTaskToProject}

class Projects {
    
    static #projects = [];

    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        Projects.#projects.push([this]);
    }

    static showProjects(){
        return Projects.#projects;
    }
}

function addTaskToProject(project, title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    project.push(this)
}

new Projects("New Year");
new addTaskToProject(Projects.showProjects()[0], "Invite guests", "Go over all of them", format("12-30-2024", 'dd MMM yyyy'), "Low");
new addTaskToProject(Projects.showProjects()[0], "Prepare feast", "at least 5 dishes", format("12-30-2024", 'dd MMM yyyy'), "Mediocre");
new Projects("Christmas");
new addTaskToProject(Projects.showProjects()[1], "Learn Christmas songs", "The Little Swallow", format(new Date, 'dd MMM yyyy'), "Low");
// console.log(Projects.showProjects())

