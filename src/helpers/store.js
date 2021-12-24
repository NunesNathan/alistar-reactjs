export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function setTasks(TaskList) {
  localStorage.setItem('tasks', JSON.stringify(TaskList));
}

export function sendTasks(task) {
  let taskArray = getTasks();
  if (!taskArray) {
    taskArray = [];
  }
  if (!taskArray[0]) {
    taskArray[0] = task;
  } else {
    taskArray.push(task);
  }
  setTasks(taskArray);
}

export function deleteTask(task) {
  if (task === 'all') {
    localStorage.setItem('tasks', '[]');
  } else {
    const taskArray = getTasks();
    taskArray.splice(task, 1);
    setTasks(taskArray);
  }
}

export function getTaskByKey() {
  const pathId = window.location.pathname.match(/[^/]+$/)[0];
  const taskArray = getTasks();
  return taskArray.find(({ uniqKey }) => uniqKey === pathId);
}

export function replaceTaskDescription(uniqKey, description) {
  const taskArray = getTasks();
  taskArray.forEach((eachItem) => {
    if (eachItem.uniqKey === uniqKey) {
      eachItem.desc = description;
    }
  });
  setTasks(taskArray);
}

export function changeTasksIndex(clickedIndex, targetIndex) {
  const taskArray = getTasks();
  if ((clickedIndex >= 0) && (targetIndex >= 0)) {
    [taskArray[clickedIndex], taskArray[targetIndex]] = (
      [taskArray[targetIndex], taskArray[clickedIndex]]);
  }
  setTasks(taskArray);
}
