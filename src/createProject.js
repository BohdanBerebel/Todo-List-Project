export {Projects}

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
new addTaskToProject(Projects.showProjects()[0], "Invite guests", "Go over all of them", "12-30-2024", "Low");
new addTaskToProject(Projects.showProjects()[0], "Prepare feast", "at least 5 dishes", "12-30-2024", "Mediocre");
new Projects("Christmas");
console.log(Projects.showProjects())
