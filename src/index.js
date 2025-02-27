import "./style.css";
import { TodoProject } from "./todo-project";

const todoProjects = [];

(function initializeProjects() {
    const newProject = new TodoProject();
    todoProjects.push(newProject);
})();

function deleteProject(index) {
    todoProjects.splice(index, 1);
}