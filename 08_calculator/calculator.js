const add = function (numA, numB) {
	return numA + numB;
};

const subtract = function (numA, numB) {
	return numA - numB;
};

const sum = function (numArray) {
	return numArray.reduce((sum, current) => sum + current, 0);
};

const multiply = function (numArray) {
	return numArray.reduce((sum, current) => sum * current);
};

const power = function (base, exponent) {
	return base ** exponent;
};

const factorial = function (num) {
	if (num < 0) return -1;
	else if (num == 0) return 1;
	else {
		return num * factorial(num - 1);
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
