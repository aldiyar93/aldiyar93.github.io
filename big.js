
function count_sal() {
  var sal = +document.getElementById('salary').value;
  var days = +document.getElementById('days_count').value;
  var hours = +document.getElementById('hours_count').value;

  var a = Math.round(sal / (days * 8 ));
  var b = a * 8;
  var c = a * hours * 1.5;
  var d = sal + c;

  document.getElementById('result_a').innerHTML = a;
  document.getElementById('result_b').innerHTML = b;
	document.getElementById('result_с').innerHTML = c;
  document.getElementById('result_d').innerHTML = d;



}

document.getElementById('count').addEventListener('click', count_sal)

    