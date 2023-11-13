const findTheOldest = function (people) {
	return people.reduce((oldest, currentPerson) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currentPersonAge = getAge(
			currentPerson.yearOfBirth,
			currentPerson.yearOfDeath
		);

		return oldestAge > currentPersonAge ? oldest : currentPerson;
	});
};

function getAge(yearOfBirth, yearOfDeath) {
	if (!yearOfDeath) {
		yearOfDeath = new Date().getFullYear();
	}
	return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
