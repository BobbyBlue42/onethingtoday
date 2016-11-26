function increment() {
	var count = Number(document.getElementById('circle').innerHTML) + 1;
	if (count == 1) {
		document.getElementById('done').style.display = "block";
	}
	document.getElementById('circle').innerHTML = count;
}

function decrement() {
	var count = document.getElementById('circle').innerHTML - 1;
	if (count > 0) {
		document.getElementById('circle').innerHTML = count;
	} else {
		document.getElementById('done').style.display = "none";
		document.getElementById('circle').innerHTML = "0";
	}
}