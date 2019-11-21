function lines(x, y1, y2, width, pulse, cpulse) {
  var c = document.querySelector('canvas');
  var cx = document.querySelector('canvas').getContext('2d');

  //top line
  cx.beginPath();
  cx.moveTo(x, y1);
  cx.lineTo(c.width, y1);
  cx.strokeStyle = '#89e8bc';
  cx.stroke();

  //bottom line
  cx.beginPath();
  cx.moveTo(x, y2);
  cx.lineTo(c.width, y2);
  cx.strokeStyle = '#ffaa81';
  cx.stroke();
 }

function circles(x, y1, y2, width, pulse, cpulse) {
  var c = document.querySelector('canvas');
  var cx = document.querySelector('canvas').getContext('2d');

  //first circles
  cx.beginPath();
  cx.arc(x, y1, 8, 0, 360);
  cx.fillStyle = '#89e8bc';
  cx.fill();

  cx.beginPath();
  cx.arc(x, y2, 8, 0, 360);
  cx.fillStyle = '#ffaa81';
  cx.fill();

  //pulse circles
  var i;
  for (i=1; i<pulse; i++) {
     var cirx = (((width - x) / pulse) * i) + x;
     cx.beginPath();
     cx.arc(cirx, y1, 8, 0, 360);
     cx.fillStyle = '#89e8bc';
     cx.fill();
  }

  //cpulse circles
  for (i=1; i<cpulse; i++) {
    var cirx = (((width - x) / cpulse) * i) + x;
    cx.beginPath();
    cx.arc(cirx, y2, 8, 0, 360);
    cx.fillStyle = '#ffaa81';
    cx.fill();
  }
}

function draw(x, y1, y2, width, pulse, cpulse) {
  var c = document.querySelector('canvas');
  var cx = document.querySelector('canvas').getContext('2d');

  //clear canvas
  cx.clearRect(0, 0, c.width, c.height);

  //combine functions
  lines(x, y1, y2, width, pulse, cpulse);
  circles(x, y1, y2, width, pulse, cpulse);
}
