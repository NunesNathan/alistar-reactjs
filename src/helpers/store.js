export function sendTasks(task) {
  let arr = JSON.parse(localStorage.getItem('tasks'));
  if (!arr) {
    arr = [];
  }
  if (arr[0] === null) {
    arr[0] = task;
  } else {
    arr.push(task);
  }
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export function deleteTask(task) {
  let arr = JSON.parse(localStorage.getItem('tasks'));
  arr.splice(task, 1)
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function refreshTasks(arrOfTasks) {
  localStorage.setItem('tasks', JSON.stringify(arrOfTasks));
} 
