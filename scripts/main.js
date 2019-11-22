var hasRun = false;

function globalCall() {
  //declare variables globally to be used when button is clicked
  var c = document.querySelector('canvas');
  var cx = document.querySelector('canvas').getContext('2d');

  c.style = 'height: 150px';

  //get pulse values
  var pulse = document.querySelector('.pulse').value;
  var cpulse = document.querySelector('.cpulse').value;

  //final call including table generation
  draw(60, 25, 75, c.width, pulse, cpulse);
  generateTable();

  hasRun = true;
}

//check for change in input
document.querySelector('.submit').onclick = function() {globalCall()}
