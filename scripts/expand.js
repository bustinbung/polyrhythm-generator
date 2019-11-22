var tableOpen = false;
var linesOpen = false;

var thead = document.querySelector('.octable');
var lhead = document.querySelector('.oclines');

var twrap = document.querySelector('.tableWrap');
var lwrap = document.querySelector('.linesWrap');

thead.onclick = function() {
  if (hasRun) {
    if (tableOpen) {
      twrap.style = 'display: none;';
      tableOpen = false;

      thead.children[0].style = 'display: inline; opacity: 1;';
      thead.children[1].style = 'display: none; opacity: 0;';
    } else {
      twrap.style = 'display: block;';
      tableOpen = true;

      thead.children[0].style = 'display: none; opacity: 0;';
      thead.children[1].style = 'display: inline; opacity: 1;';
    }
  } else {
    return;
  }
}

lhead.onclick = function() {
  if (hasRun) {
    if (linesOpen) {
    lwrap.style = 'display: none;';
    linesOpen = false;

    lhead.children[0].style = 'display: inline; opacity: 1;';
    lhead.children[1].style = 'display: none; opacity: 0;';
    } else {
    lwrap.style = 'display: block;';
    linesOpen = true;

    lhead.children[0].style = 'display: none; opacity: 0;';
    lhead.children[1].style = 'display: inline; opacity: 1;';
  }
  } else {
  return;
  }
}
