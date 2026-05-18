import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

export function addTask(title, priority, dueDate) {
  if (!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate))
    return "Invalid task data";

  tasks.push({ id: Date.now(), title, priority, dueDate, completed: false });
  return "Task added";
}

export const getAllTasks = () => tasks;

export function completeTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = true;
}
