const repeatString = function (string, count) {
	if (count < 0) {
		return "ERROR";
	}

	let stringToReturn = "";
	for (let i = 0; i < count; i++) {
		stringToReturn += string;
	}
	return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
