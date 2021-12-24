import $ from 'jquery';

export default function addBorderHome() {
  const homeIcon = '.fas.fa-home';
  function classer() { $(homeIcon).addClass('border-none'); }
  function disclasser() { $(homeIcon).removeClass('border-none'); }

  $(homeIcon).parent().hover(classer, disclasser);
}
