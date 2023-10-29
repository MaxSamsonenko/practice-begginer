export function add(num1, num2) {
	return num1 + num2;
}

export function substract(num1, num2) {
	return num1 - num2;
}

export function multiply(num1, num2) {
	return num1 * num2;
}

export function devide(num1, num2) {
	if (num2 === 0) {
		alert("You cannot devide by 0!");
		return "";
	}
	return num1 / num2;
}
