const form = document.querySelector(".form");
const result = document.querySelector(".results");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let userStr = Number(e.target.elements.decimal.value);
	if (userStr < 1) return alert("Ooops! Try again");
	if (!Number.isInteger(userStr))
		return alert("Please do not use float numbers");
	result.innerHTML = `<p>The binary representation of the decimal ${userStr} is <strong>${userStr.toString(
		2
	)}</strong></p>`;
}

//alternative?
function toBinary(num) {
	let arr = [];
	for (let i = num; i >= 1; i -= (i / 2).toFixed(0)) {
		arr.push(i % 2);
	}
	return arr.reverse().join("");
}
