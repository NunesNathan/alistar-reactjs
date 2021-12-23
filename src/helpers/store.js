export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function sendTasks(task) {
  let arr = getTasks();
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
  if (task === 'all') {
    localStorage.setItem('tasks', '[]');
  } else {
    const arr = getTasks();
    arr.splice(task, 1);
    localStorage.setItem('tasks', JSON.stringify(arr));
  }
}

export function getTaskByKey(pathKey) {
  const arr = getTasks();
  return arr.find(({ uniqKey }) => uniqKey === pathKey);
}

export function replaceTaskDetail(uniqKey, description) {
  const arr = getTasks();
  arr.forEach((eachItem) => {
    if (eachItem.uniqKey === uniqKey) {
      eachItem.desc = description;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export function changeTasksIndex(clickedIndex, targetIndex) {
  const arr = getTasks();
  if ((clickedIndex >= 0) && (targetIndex >= 0)) {
    [arr[clickedIndex], arr[targetIndex]] = [arr[targetIndex], arr[clickedIndex]];
  }
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export function getAllKeys() {
  const arr = getTasks();
  return arr.map(({ uniqKey }) => uniqKey);
}

export function getIndexByTaskName(taskName) {
  const arr = getTasks();
  return arr.findIndex(({ task }) => task === taskName);
}
