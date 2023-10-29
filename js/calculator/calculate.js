import { add, substract, devide, multiply } from "./operations.js";

export function calculate(num1, num2, operator) {
	let value;
	switch (operator) {
		case "+":
			value = add(num1, num2);
			break;
		case "-":
			value = substract(num1, num2);
			break;
		case "*":
			value = multiply(num1, num2);
			break;
		case "/":
			value = devide(num1, num2);
			break;
		default:
			break;
	}
	return value;
}
