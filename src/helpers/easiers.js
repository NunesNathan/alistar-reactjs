import uniqid from 'uniqid';

export function createKey(taskName) {
  const four = 4;
  return uniqid(`${taskName.substring(0, four).match(/[^\s]/g).join('')}-task-`);
}

export function isActive() {
  return window.location.pathname !== '/';
}
