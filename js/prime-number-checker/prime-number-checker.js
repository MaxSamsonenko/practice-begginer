const form = document.querySelector(".form");
const result = document.querySelector(".result");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let userStr = e.target.elements.number.value;
	if (checkIfPrime(Number(userStr))) {
		return (result.innerHTML = `the number ${userStr} is a prime number`);
	}
	result.innerHTML = `the number ${userStr} is not a prime number`;
}

function checkIfPrime(number) {
	if (number <= 1) return false; // 0 and 1 are not prime
	if (number <= 3) return true; // 2 and 3 are prime
	if (number % 2 === 0 || number % 3 === 0) return false;

	for (let i = 5; i * i <= number; i += 6) {
		if (number % i === 0 || number % (i + 2) === 0) return false;
	}

	return true;
}
