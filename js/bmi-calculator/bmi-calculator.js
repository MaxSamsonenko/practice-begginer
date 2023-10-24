import { explanationText, importantText } from "./bmi-explanation.js";

const form = document.querySelector("#bmi-form");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const result = document.querySelector(".result");
const resultText = document.querySelector(".bmi-explanation");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
	e.preventDefault();

	if (Number(weight.value) > 500 || Number(height.value) >= 300) {
		alert("Really, dude?!");
		inputFieldClear();
		return;
	}
	const bmI = calculateBMI(Number(weight.value), Number(height.value)).toFixed(
		1
	);
	result.innerHTML = bmI;
	result.classList.add("result-disp");
	addExplanation(userCategory(bmI));

	inputFieldClear();
}

//calculate BMI
function calculateBMI(weight, height) {
	let heightInMeters = height / 100;
	return weight / (heightInMeters * heightInMeters);
}

//clear input field after form submit
function inputFieldClear() {
	weight.value = "";
	height.value = "";
}
//check which category falls under the resulted bmi
function userCategory(bmi) {
	let weightType = null;
	if (bmi < 18.5) {
		weightType = "underweight";
	} else if (bmi > 18.5 && bmi < 24.9) {
		weightType = "normal";
	} else if (bmi > 25 && bmi < 29.9) {
		weightType = "overweight";
	} else if (bmi > 30 && bmi < 34.9) {
		weightType = "obesity1";
	} else if (bmi > 35 && bmi < 39.9) {
		weightType = "obesity2";
	} else if (bmi > 40) {
		weightType = "obesity3";
	} else {
		return alert("You've entered incorrect parameters");
	}
	return weightType;
}
//create explanation text markup according to results
function createMarkup(arr) {
	return arr.map((item) => `<li>${item}</li>`).join("");
}
//Add text according to the result
function addExplanation(weightType) {
	const [{ eng }] = explanationText;
	const { [weightType]: categoryInfo } = eng;
	const { explain, recommend } = categoryInfo;
	const markup = `<p class="exp-text">Your result: <strong>${weightType}</strong></p>
			<span class="explain">${explain}</span>
			<ul class="rcmd-list">${createMarkup(recommend)}</ul>
			<p class="important-note"><strong>${importantText}</strong></p>`;
	resultText.innerHTML = markup;
}
