var rant_range;
var current_rant;

function load() {
	rant_range = document.getElementById("rant_range");
	current_rant = document.getElementById("current");
	update_rant();
}

function update_rant() {
	current_rant.innerHTML = rant_range.value;
}

function make_it_rant() {
	var rant_button = document.getElementById("make_it_rant");
	var rant = document.getElementById("rant");
	var to_make_ranty = rant.value.split(" ");
	rant.value = "";
	for (var word_i in to_make_ranty) {
		var word = to_make_ranty[word_i];
		if (Math.random() <= (1.0 / rant_range.value))
			word += " FUCKING";
		rant.value += word + " ";
	}
}