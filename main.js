$(document).ready(
	function() {
		var counter = document.getElementById('counter');
		if (counter) {
			document.getElementById('counter').innerHTML = ensureCommas(counter.innerHTML);
		}
	}
);

function increment() {
	var count = Number(document.getElementById('circle').innerHTML.replace(',','')) + 1;
	var counter = Number(document.getElementById('counter').innerHTML.replace(',','')) + 1;
	if (count == 1) {
		document.getElementById('done').style.display = "block";
	}
	document.getElementById('circle').innerHTML = numberWithCommas(count);
	document.getElementById('counter').innerHTML = numberWithCommas(counter);
}

function decrement() {
	var count = document.getElementById('circle').innerHTML.replace(',','') - 1;
	var counter = document.getElementById('counter').innerHTML.replace(',','') - 1;
	if (count >= 0) {
		document.getElementById('circle').innerHTML = numberWithCommas(count);
		document.getElementById('counter').innerHTML = numberWithCommas(counter);
		if (count == 0) {
			document.getElementById('done').style.display = "none";
		}
	}
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ensureCommas(x) {
	return x.toString().replace(",", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}