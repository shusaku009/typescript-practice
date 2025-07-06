// htmlのidをadd-task-buttonを変数に入れる
// 見つからない場合は早期リターン
// 変数が存在している場合は、DOMを追加する
type Task = {
  id: number;
  title: string;
  completed: boolean;
};
const addTaskButton = document.getElementById(
  "add-task-button",
) as HTMLButtonElement;
const taskList = document.getElementById("task-list");
let taskText = document.getElementById("input-text") as HTMLInputElement;
let newElement = document.createElement("p");
let task: Task[] = [];
// HTMLのbody要素に追加するか、専用のコンテナを作成

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
