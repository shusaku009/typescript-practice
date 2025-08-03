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
const newElement = document.getElementById("complete") as HTMLInputElement;

function addTask(): void {
  const newTask = {
    id: task.length + 1,
    title: taskText.value,
    completed: false,
  };
  task.push(newTask);
  taskList.insertAdjacentHTML(
    "afterend",
    `<div class="flex"><p>${taskText.value}</p><input id="complete" type="checkbox" name="" value=""></div>`,
  );
}

function completTask(): void {
  newElement.addEventListener("click", () => {
    completTask();
    console.log("チェックボックス", newElement.checked);
  });
}

document.body.addEventListener("click", (event) => {
  const target = event.target as HTMLInputElement;
  if (target.type === "checkbox") {
    const checkbox = target as HTMLInputElement;
    console.log("チェックボックス", checkbox.checked);
  }
});

addTaskButton.addEventListener("click", () => {
  addTask();
});
