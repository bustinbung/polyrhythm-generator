var tableOpen = false;
var linesOpen = false;

var thead = document.querySelector('.octable');
var lhead = document.querySelector('.oclines');

var twrap = document.querySelector('.tableWrap');
var lwrap = document.querySelector('.linesWrap');

thead.onclick = function() {
  if (hasRun) {
    if (!tableOpen) {
      twrap.classList.add('open');
      tableOpen = true;

      thead.children[0].style = 'display: none; opacity: 0;';
      thead.children[1].style = 'display: inline; opacity: 1;';
    } else {
      twrap.classList.remove('open');
      tableOpen = false;

      thead.children[0].style = 'display: inline; opacity: 1;';
      thead.children[1].style = 'display: none; opacity: 0;';
    }
  }
}

lhead.onclick = function() {
  if (hasRun) {
    if (!linesOpen) {
      lwrap.classList.add('open');
      linesOpen = true;

      lhead.children[0].style = 'display: none; opacity: 0;';
      lhead.children[1].style = 'display: inline; opacity: 1;';
    } else {
      lwrap.classList.remove('open');
      linesOpen = false;

      lhead.children[0].style = 'display: inline; opacity: 1;';
      lhead.children[1].style = 'display: none; opacity: 0;';
    }
  }
}
