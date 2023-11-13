const palindromes = function (string) {
	let stringToTest = string.toLowerCase().replace(/[\.,?!\s]/g, "");

	return stringToTest.split("").reverse().join("") == stringToTest;
};

// Do not edit below this line
module.exports = palindromes;
