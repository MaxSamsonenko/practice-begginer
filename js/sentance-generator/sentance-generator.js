import { subjects, verbs, objects } from "./words.js";

const button = document.querySelector(".generator-btn");
const result = document.querySelector(".results");

button.addEventListener("click", handleClick);

function handleClick() {
	let subject = subjects[Math.floor(Math.random() * subjects.length)];
	let verb = verbs[Math.floor(Math.random() * verbs.length)];
	let object = objects[Math.floor(Math.random() * objects.length)];

	if (isMatch(subject, ["He", "She", "It", "The cat", "The dog", "The bird"])) {
		verb += "s";
	}
	return (result.innerHTML = `${subject} ${verb} ${object}.`);
}

function isMatch(word, arr) {
	for (const a of arr) {
		if (word === a) {
			return true;
		}
	}
	return false;
}
