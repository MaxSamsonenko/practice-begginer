import { calculate } from "./calculate.js";

document.addEventListener("DOMContentLoaded", function () {
	const display = document.getElementById("display");
	const buttons = document.getElementById("buttons");
	let currentInput = "";
	let nextInput = "";
	let operator = "";

	buttons.addEventListener("click", handleClick);

	function handleClick(e) {
		if (e.target.nodeName !== "BUTTON") {
			return;
		}
		const pressedBtn = e.target;
		switch (pressedBtn.name) {
			case "digit":
				if (operator === "") {
					currentInput += pressedBtn.value;
					display.value = currentInput;
					return;
				}
				nextInput = pressedBtn.value;
				display.value += nextInput;
				break;
			case "operator":
				operator = pressedBtn.value;
				display.value += operator;
				break;
			case "equals":
				display.value = calculate(
					Number(currentInput),
					Number(nextInput),
					operator
				);
				break;
			case "clear":
				clear();
				break;
			default:
				break;
		}
	}

	function clear() {
		currentInput = "";
		nextInput = "";
		operator = "";
		display.value = "";
	}
});
