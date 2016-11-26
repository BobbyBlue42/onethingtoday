$(document).ready(function() {

	var counter = document.getElementById('counter');
	if (counter) {
		document.getElementById('counter').innerHTML = ensureCommas(counter.innerHTML);
	}

	$(".lt-green-btn").click(function() {
		if (!$(this).hasClass("active")) {
			$(".lt-green-btn").removeClass("active");
			$(this).addClass("active");
		}
	});

	$(".white-btn").click(function() {
		if (!$(this).hasClass("active")) {
			$(".white-btn").removeClass("active");
			$(".section").removeClass("active");
			$(this).addClass("active");
			var id = $(this).attr('id').replace("-btn", "");
			$("#" + id).addClass("active");

			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		}
	});


$(".thumbs:not(.selected)").hover()

});

function increment() {
	var count = Number(document.getElementById('circle').innerHTML.replace(',','')) + 1;
	var counter = Number(document.getElementById('counter').innerHTML.replace(',','')) + 1;
	document.getElementById('circle').innerHTML = numberWithCommas(count);
	document.getElementById('counter').innerHTML = numberWithCommas(counter);
}

function decrement() {
	var count = document.getElementById('circle').innerHTML.replace(',','') - 1;
	var counter = document.getElementById('counter').innerHTML.replace(',','') - 1;
	if (count >= 0) {
		document.getElementById('circle').innerHTML = numberWithCommas(count);
		document.getElementById('counter').innerHTML = numberWithCommas(counter);
	}
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ensureCommas(x) {
	return x.toString().replace(",", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

