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
		make_it_rant();
	}

	current_rant.innerHTML = rant_range.value;
}

var rant_valid = false;
var rant_val;
var rant_seed;

function make_it_rant() {
	if (!rant_valid) {
		rant_seed = (new Date()).getTime();
		Math.seedrandom(rant_seed);
		rant_valid = true;
		rant_val = rant.value;
	} else {
		Math.seedrandom(rant_seed);
	}

	var to_make_ranty = rant_val.split(" ");
	rant.value = "";
	for (var word_i in to_make_ranty) {
		var word = to_make_ranty[word_i];
		if (Math.random() <= (1.0 / rant_range.value))
			word += " FUCKING";
		rant.value += word + " ";
	}
}