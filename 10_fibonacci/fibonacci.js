const fibonacci = function (count) {
	if (count < 0) return "OOPS";
	if (count === 0) return 0;

	let firstPrevious = 1;
	let secondPrevious = 0;

	for (let i = 1; i < count; i++) {
		let temp = firstPrevious + secondPrevious;
		secondPrevious = firstPrevious;
		firstPrevious = temp;
	}

	return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
