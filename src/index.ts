// htmlのidをadd-task-buttonを変数に入れる
// 見つからない場合は早期リターン
// 変数が存在している場合は、DOMを追加する
const addTaskButton = document.getElementById(
  "add-task-button",
) as HTMLButtonElement;
const taskList = document.getElementById("task-list");
let taskText = document.getElementById("input-text") as HTMLInputElement;

function addTaskList(): void {
  console.log(`タスク：`, taskText.value);
}

document.addEventListener("click", addTaskList);
//
// document
//   .getElementById("add-task-button")
//   ?.addEventListener("click", addTaskList);
