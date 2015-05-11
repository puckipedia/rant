var rant_range;
var current_rant;
var rant;

function load() {
	rant_range = document.getElementById("rant_range");
	current_rant = document.getElementById("current");
	rant = document.getElementById("rant");

	update_rant();
}

function invalidate_rant() {
	rant_valid = false;
}

function update_rant() {
	if (rant_valid) {
		make_it_rant(true);
	}

	current_rant.innerHTML = Math.floor(rant_range.value * 100);
}

var rant_valid = false;
var rant_val;
var rant_seed;

function make_it_rant(force) {
	if (!rant_valid || force == undefined) {
		rant_seed = (new Date()).getTime();
		Math.seedrandom(rant_seed);
		rant_valid = true;
		rant_val = rant.value;
	} else {
		Math.seedrandom(rant_seed);
	}

	var rant_amount = rant_range.value;

	rant.value = rant_val.replace(/ /g, function() {
		if (Math.random() <= rant_amount)
			return " FUCKING ";
		return " ";
	});
}