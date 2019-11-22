var tableOpen = false;
var linesOpen = false;

var thead = document.querySelector('.octable');
var lhead = document.querySelector('.oclines');

var twrap = document.querySelector('.tableWrap');
var lwrap = document.querySelector('.linesWrap');

thead.onclick = function() {
  if (hasRun) {
    if (!tableOpen) {
      tableOpen = true;

      thead.children[0].style = 'display: none; opacity: 0;';
      thead.children[1].style = 'display: inline; opacity: 1;';
    }
  }
}

lhead.onclick = function() {
  if (hasRun) {
    if (!linesOpen) {

    } else {

  }
}
