import { addTask, getAllTasks, completeTask } from './task.js';

addTask("Learn JS Modules", "high", "2026-04-01");
addTask("Practice Coding", "medium", "2026-04-05");

console.log(getAllTasks());

completeTask(getAllTasks()[0].id);

console.log(getAllTasks());


