const form = document.querySelector(".form");
const result = document.querySelector(".results");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let userStr = e.target.elements.sorter.value.split(" ");

	result.innerHTML = `<p>Input array: <i>[${markup(
		userStr
	)}]</i></p> <p>Output array: <i>[${markup(arraySort(userStr))}]</i></p>`;
}

function arraySort(array) {
	return array.sort((a, b) => a - b);
}

function markup(array) {
	return array.map((item) => `<span> <strong>${item}</strong></span>`);
}
