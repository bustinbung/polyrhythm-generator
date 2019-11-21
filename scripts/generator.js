function generateTable() {

	//grab form data (switched for table accuracy)
  var cpulse = document.querySelector('.pulse').value;
  var pulse = document.querySelector('.cpulse').value;

  //reset table
	var table = document.querySelector('.table');
  table.innerHTML = '';

  //create table
  var i;
  for (i=1; i<=pulse; i++) {
  	//create a new row
  	var row = document.createElement('tr');

    //create columns
    var j;
    for (j=1; j<=cpulse; j++) {
 			var column = document.createElement('td');
      var num = document.createTextNode(j);
      column.appendChild(num);
      row.appendChild(column);
    }

    //append row to div
  	table.appendChild(row);
  }

  //accenting pulses
  for (i=0; i<document.getElementsByTagName('td').length; i+=parseFloat(cpulse)) {
    var pulseacc = document.createAttribute('class');
    pulseacc.value = 'pulseacc';
    document.getElementsByTagName('td')[i].setAttributeNode(pulseacc);
  }

  //accenting counterpulses
  for (i=0; i<document.getElementsByTagName('td').length; i+=parseFloat(pulse)) {
    var acc = document.createAttribute('class');
    acc.value = 'accent';
    document.getElementsByTagName('td')[i].innerHTML = '<b>X</b>';
    document.getElementsByTagName('td')[i].setAttributeNode(acc);
  }

  document.querySelector('.resolve').innerHTML = 'this pattern will resolve in <b>' + math.lcm(pulse, cpulse) + '</b> beats.'
}
