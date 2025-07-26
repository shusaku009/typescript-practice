type Task = {
  id: number;
  title: string;
  completed: boolean;
};
const addTaskButton = document.getElementById(
  "add-task-button",
) as HTMLButtonElement;
const taskList = document.getElementById("addTask") as HTMLHtmlElement;
let taskText = document.getElementById("input-text") as HTMLInputElement;
let task: Task[] = [];

function addTask(): void {
  task.push({ id: task.length + 1, title: taskText.value, completed: false });
  taskList.insertAdjacentHTML("afterend", `<p>${taskText.value}</p>`);
  taskList.insertAdjacentHTML(
    "afterend",
    `<div class="flex"><p>${taskText.value}</p><input type="checkbox" name="" value=""></div>`,
  );
}

addTaskButton.addEventListener("click", addTaskList);
//
// document
//   .getElementById("add-task-button")
//   ?.addEventListener("click", addTaskList);
