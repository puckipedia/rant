function make_it_rant() {
	var rant_button = document.getElementById("make_it_rant");
	var rant = document.getElementById("rant");
	var to_make_ranty = rant.value.split(" ");
	rant.value = "";
	for (var word_i in to_make_ranty) {
		var word = to_make_ranty[word_i];
		if (Math.random() < 0.2)
			word += " FUCKING";
		rant.value += word + " ";
	}
}