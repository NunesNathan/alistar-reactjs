/* eslint-disable no-magic-numbers */
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

export function newDate() {
  const day = new Date().getDate();
  const mouth = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const today = `${day}/${mouth}/${year}`;
  return today;
}

export function redeemDate() {
}

export const dateData = {
  dayNum: ['dd', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
  mounthsNum: ['mm', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai',
    'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  years: ['yyyy', 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
    2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
};
