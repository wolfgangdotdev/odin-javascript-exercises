const sumAll = function (min, max) {
	if (min > max) {
		let temp = min;
		min = max;
		max = temp;
	}

	if (min < 0 || max < 0) return "ERROR";

	if (typeof min != "number" || typeof max != "number") return "ERROR";

	let total = 0;
	for (let i = min; i <= max; i++) {
		total += i;
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
