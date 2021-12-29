import $ from 'jquery';

export function addBorderHome() {
  const homeIcon = '.fas.fa-home';
  function classer() { $(homeIcon).addClass('border-none'); }
  function disclasser() { $(homeIcon).removeClass('border-none'); }

  $(homeIcon).parent().hover(classer, disclasser);
}

export function removeClasses() {
  const unnecessary = 'btn btn-primary';

  function remove() { $('#clearButton').removeClass(unnecessary); }
  remove();
}
