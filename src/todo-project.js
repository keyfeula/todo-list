import { TodoItem } from "./todo-item";

export class TodoProject {
    constructor (projectName = "untitled") {
        this.todoList = [];
        this.projectName = projectName;
    }

    addTodoItem(todoItem) {
        this.todoList.push(todoItem);
    }

    removeTodoItem(index) {
        this.todoList.splice(index, 1);
    }
}