$(document).ready(function() {

	var currentTab = "me"

	var counter = document.getElementById('counter');
	if (counter) {
		document.getElementById('counter').innerHTML = ensureCommas(counter.innerHTML);
	}

	$(".lt-green-btn").click(function() {
		if (!$(this).hasClass("active")) {
			$(".lt-green-btn").removeClass("active");
			$(this).addClass("active");
			currentTab = $(this).attr("id");
			if (window.location.pathname.includes("donate")) {
				switchContextDonations(currentTab)
			} else if (window.location.pathname.includes("results")) {
				switchContextActions(currentTab)
			}
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

	var modal = document.getElementById('modal');
	if (modal) {
		var streak = document.getElementById('streak');
		var span = document.getElementsByClassName('close')[0];

		streak.onclick = function () {
			modal.style.display = "block";
		}

		span.onclick = function () {
			modal.style.display = "none";
		}

		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}


	$(".thumbs:not(.selected)").hover()

	incrementLoop();
	decrementLoop();

});

var incrementing = false;
var decrementing = false;
var loopTimer = 150;

function increment() {
	var count = Number(document.getElementById('circle').innerHTML.replace(',','')) + 1;
	var counter = Number(document.getElementById('counter').innerHTML.replace(',','')) + 1;
	document.getElementById('circle').innerHTML = numberWithCommas(count);
	document.getElementById('counter').innerHTML = numberWithCommas(counter);
}

function startIncrementing() {
	incrementing = true;
}

function stopIncrementing() {
	incrementing = false;
}

function incrementLoop() {
	setInterval(function () {
		if (incrementing) {
			increment();
		}
	}, loopTimer);
}

function decrement() {
	var count = document.getElementById('circle').innerHTML.replace(',','') - 1;
	var counter = document.getElementById('counter').innerHTML.replace(',','') - 1;
	if (count >= 0) {
		document.getElementById('circle').innerHTML = numberWithCommas(count);
		document.getElementById('counter').innerHTML = numberWithCommas(counter);
	}
}

function startDecrementing() {
	decrementing = true;
}

function stopDecrementing() {
	decrementing = false;
}

function decrementLoop() {
	setInterval(function () {
		if (decrementing) {
			decrement();
		}
	}, loopTimer);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ensureCommas(x) {
	return x.toString().replace(",", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function switchContextDonations(currentTab) {
	switch (currentTab) {
		case 'me':
			$("#capsule")[0].textContent = "$5";
			break;
		case 'everyone':
			$("#capsule")[0].textContent = "$12,349"
			break;
		case 'all-time':
			$("#capsule")[0].textContent = "$508,370"
			break;
		default:
			$("#capsule")[0].textContent = "$12,349"
	}
}

function switchContextActions(currentTab) {
	switch (currentTab) {
		case 'me':
			$("#capsule")[0].textContent = "5";
			$("#electricity")[0].textContent = "3,000 watts of electricity";
			$("#co2")[0].textContent = "0.04 tonnes of CO2";
			$("#water")[0].textContent = "0.2 litres of water";
			break;
		case 'everyone':
			$("#capsule")[0].textContent = "12,349"
			$("#electricity")[0].textContent = "743,000 watts of electricity";
			$("#co2")[0].textContent = "53 tonnes of CO2";
			$("#water")[0].textContent = "430 litres of water";
			break;
		case 'all-time':
			$("#capsule")[0].textContent = "508,370"
			$("#electricity")[0].textContent = "17,847,800 watts of electricity";
			$("#co2")[0].textContent = "391 tonnes of CO2";
			$("#water")[0].textContent = "26,730 litres of water";
			break;
		default:
			$("#capsule")[0].textContent = "12,349"
			$("#electricity")[0].textContent = "743,000 watts of electricity";
			$("#co2")[0].textContent = "53 tonnes of CO2";
			$("#water")[0].textContent = "430 litres of water";
	}
}

