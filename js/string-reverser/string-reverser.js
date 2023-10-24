const form = document.querySelector(".form");
const enteredText = document.querySelector(".entered-text");
const reversedText = document.querySelector(".reversed-text");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let userStr = e.target.elements.input.value;
	if (userStr === "" || userStr.length < 2) {
		return alert("Please enter at least two characters");
	}
	enteredText.innerHTML = userStr;
	reversedText.innerHTML = reverseStr(userStr);
}

function reverseStr(str) {
	return str.split("").reverse().join("");
}
