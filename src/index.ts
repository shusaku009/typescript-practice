type Task = {
  id: number;
  title: string;
  completed: boolean;
};
const addTaskButton = document.getElementById(
  "add-task-button",
) as HTMLButtonElement;
const taskList = document.querySelector(".taskList") as HTMLHtmlElement;
let taskText = document.getElementById("input-text") as HTMLInputElement;
let newElement = document.createElement("p");
let task: Task[] = [];

function addTaskList(): void {
  const newElement = document.createElement("p");
  newElement.textContent = taskText.value;
  task.push({ id: task.length + 1, title: taskText.value, completed: false });
  console.log(task);
  document.body.appendChild(newElement);
}

addTaskButton.addEventListener("click", addTaskList);
//
// document
//   .getElementById("add-task-button")
//   ?.addEventListener("click", addTaskList);
