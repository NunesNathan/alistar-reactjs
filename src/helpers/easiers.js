import uniqid from 'uniqid';

export default function createKey(taskName) {
  const four = 4;
  return uniqid(`${taskName.substring(0, four).match(/[^\s]/g).join('')}-task-`);
}
