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
let newtask: Task[] = [];

function addTask(): void {
  const task = {
    id: newtask.length + 1,
    title: taskText.value,
    completed: false,
  };

  newtask.push(task);
  taskList.insertAdjacentHTML(
    "afterend",
    `<div class="flex"><p>${taskText.value}</p><input data-task-id=${task.id}  type="checkbox" name="" value=""></div>`,
  );
}

function findTaskTarget(taskId: number): Task | undefined {
  return newtask.find((task) => task.id === taskId);
}

function completTask(taskId: number): void {
  const taskTarget = findTaskTarget(taskId);
  if (taskTarget) {
    taskTarget.completed = true;
  }
}

document.body.addEventListener("click", (event) => {
  const target = event.target as HTMLInputElement;
  const taskId = parseInt(target.dataset.taskId!);
  const taskTarget = findTaskTarget(taskId);

  if (target.type === "checkbox") {
    if (taskTarget) {
      taskTarget.completed = !taskTarget.completed;
      const taskBody = document.querySelector(".flex") as HTMLElement;

      if (taskTarget.completed) {
        taskBody.classList.add("display-none");
      } else {
        taskBody.classList.remove("display-none");
      }
    }
  }
});

addTaskButton.addEventListener("click", () => {
  addTask();
});
