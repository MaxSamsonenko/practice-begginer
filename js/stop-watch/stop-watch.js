let timer;
let isRunning = false;
let isPaused = false;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timestamps = [];

const startStopBtn = document.getElementById("startStop");
const display = document.getElementById("display");
const lapBtn = document.getElementById("lap");
const lapsDisplay = document.getElementById("laps");

startStopBtn.addEventListener("click", startStop);
lapBtn.addEventListener("click", lapRecord);

function lapRecord() {
	if (isPaused) {
		reset();
		return;
	}
	timestamps.push(display.textContent);
	lapsDisplay.innerHTML = `<table class="table">
				<tr class="row">
					<th class="column">Lap</th>
					<th class="column">Lap Time</th>
				</tr>
				${markup(timestamps)}
			</table>`;
}

function markup(array) {
	return array
		.map(
			(item, index) =>
				`<tr class="row"><td class="column">${index + 1 < 10 ? "0" : ""}${
					index + 1
				}</td><td class="column">${item}</td></tr>`
		)
		.join("");
}

function startStop() {
	if (isRunning) {
		isPaused = true;
		clearInterval(timer);
		lapBtn.textContent = "Reset";
		startStopBtn.textContent = "Resume";
		startStopBtn.classList.toggle("stopBtn");
	} else {
		timer = setInterval(updateTime, 100);
		isPaused = false;
		lapBtn.textContent = "Lap";
		startStopBtn.textContent = "Stop";
		startStopBtn.classList.toggle("stopBtn");
	}
	isRunning = !isRunning;
}

function reset() {
	clearInterval(timer);
	if (startStopBtn.classList.contains("stopBtn")) {
		startStopBtn.classList.toggle("stopBtn");
	}

	isRunning = false;
	miliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	timestamps = [];
	display.textContent = "00:00:00.0";
	startStopBtn.textContent = "Start";
	lapBtn.textContent = "Lap";
	lapsDisplay.textContent = "";
}

function updateTime() {
	miliseconds++;
	if (miliseconds === 10) {
		miliseconds = 0;
		seconds++;
		if (seconds === 60) {
			seconds = 0;
			minutes++;
			if (minutes === 60) {
				minutes = 0;
				hours++;
			}
		}
	}

	const timeString = `${hours < 10 ? "0" : ""}${hours}:${
		minutes < 10 ? "0" : ""
	}${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${miliseconds}`;
	display.textContent = timeString;
}
