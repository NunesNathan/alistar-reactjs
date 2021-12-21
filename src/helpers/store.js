export function sendTasks(task) {
  let arr = JSON.parse(localStorage.getItem('tasks'));
  if (!arr) {
    arr = [];
  }
  if (!arr[0]) {
    arr[0] = task;
  } else {
    arr.push(task);
  }
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export function deleteTask(task) {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  arr.splice(task, 1);
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function refreshTasks(arrOfTasks) {
  localStorage.setItem('tasks', JSON.stringify(arrOfTasks));
}

export function getTask(pathKey) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return tasks.find(({ uniqKey }) => uniqKey === pathKey);
}

export function getTaskFromTaskName(taskName) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return tasks.find(({ task }) => task === taskName);
}

export function replaceTaskInDetail(uniqKey, description) {
  const arr = getTasks();
  arr.forEach((eachItem) => {
    if (eachItem.uniqKey === uniqKey) {
      eachItem.desc = description;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(arr));
}
