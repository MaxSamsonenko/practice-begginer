const form = document.querySelector(".form");
const result = document.querySelector(".results");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let userStr = e.target.elements.cross.value;
	if (userStr.length <= 1) return alert("Enter more digits");
	result.innerHTML = `<p>The cross sum of ${userStr} is <strong>${calculateSum(
		userStr
	)}</strong></p>`;
}

function calculateSum(num) {
	let sum = 0;
	let arr = num.split("");
	for (const a of arr) {
		if (!Number(a)) {
			continue;
		}
		sum += Number(a);
	}
	return sum;
}
