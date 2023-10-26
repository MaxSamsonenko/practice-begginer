const form = document.querySelector(".form");
const result = document.querySelector(".results");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	let userStr = e.target.elements.sorter.value.split(" ");

	result.innerHTML = `<p>Input array: <i>[${markup(
		userStr
	)}]</i></p> <p>Output array: <i>[${markup(mergeSort(userStr))}]</i></p>`;
}

function markup(array) {
	return array.map((item) => `<span> <strong>${item}</strong></span>`);
}

function mergeSort(arr) {
	// Base case
	if (arr.length <= 1) {
		return arr;
	}

	// Split the array into two halves.
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	// Recursively sort both arrays.
	const leftSorted = mergeSort(left);
	const rightSorted = mergeSort(right);

	// Merge the sorted halves back together.
	return merge(leftSorted, rightSorted);
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Compare elements from the left and right arrays and merge them.
	while (leftIndex < left.length && rightIndex < right.length) {
		if (Number(left[leftIndex]) < Number(right[rightIndex])) {
			result.push(Number(left[leftIndex]));
			leftIndex++;
		} else {
			result.push(Number(right[rightIndex]));
			rightIndex++;
		}
	}

	// Append the remaining elements from both arrays (if any).
	return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
