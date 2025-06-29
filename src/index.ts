// htmlのidをadd-task-buttonを変数に入れる
// 見つからない場合は早期リターン
// 変数が存在している場合は、DOMを追加する
function addTaskList(): void {
  const addTaskButton = document.getElementById(
    "add-task-button",
  ) as HTMLButtonElement;
  console.log("タスクボタン", addTaskButton);
}

document.addEventListener("click", addTaskList);
//
// document
//   .getElementById("add-task-button")
//   ?.addEventListener("click", addTaskList);
