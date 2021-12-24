import uniqid from 'uniqid';

export function createKey(taskName) {
  const four = 4;
  return uniqid(`${taskName.substring(0, four).match(/[^\s]/g).join('')}-task-`);
}

export function buttonIsActive(pathWithId) {
  return window.location.pathname !== pathWithId
    ? 'nav-link col-2'
    : 'nav-link col-2 active';
}

export function getPathLink(uniqKey) {
  return `/task_details/${uniqKey}`;
}
