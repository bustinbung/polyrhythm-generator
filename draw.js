var hasRun = false;

function globalCall() {
  //declare variables globally to be used when button is clicked
  var c = document.querySelector('canvas');
  var cx = c.getContext('2d');

  c.style = 'height: 150px';

  //get pulse values
  var pulse = document.querySelector('.pulse').value;
  var cpulse = document.querySelector('.cpulse').value;

  function draw(x, y1, y2, width, pulse, cpulse) {
    //clear canvas
    cx.clearRect(0, 0, c.width, c.height);

    function lines(x, y1, y2, width) {
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

    //combine functions
    lines(x, y1, y2, width);
    circles(x, y1, y2, width, pulse, cpulse);
  }

  //final call including table generation
  draw(10, 25, 75, c.width, pulse, cpulse);
  generateTable();


  if (!hasRun) {
    document.querySelector('.tableWrap').style = 'display: none;';
    document.querySelector('.linesWrap').style = 'display: none;';
  } else {
    return;
  }

  hasRun = true;
}

//check for change in input
document.querySelector('.submit').onclick = function() {globalCall()}
