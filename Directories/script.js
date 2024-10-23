const redLight = document.querySelector(".light.red");
const yellowLight = document.querySelector(".light.yellow");
const greenLight = document.querySelector(".light.green");
const timerDisplay = document.querySelector(".timer");

let isManual = false; // Tryb ręczny

// Funkcje aktywujące światła
function activateLight(light) {
	light.classList.add("active");
}

function deactivateLight(light) {
	light.classList.remove("active");
}

// Funkcja odliczania
function countdown(seconds, callback) {
	let remainingTime = seconds;
	timerDisplay.textContent = remainingTime;
	const interval = setInterval(() => {
		remainingTime--;
		timerDisplay.textContent = remainingTime;
		if (remainingTime === 0) {
			clearInterval(interval);
			callback();
		}
	}, 1000);
}

// Tryb automatyczny
function trafficLightSequence() {
	if (!isManual) {
		activateLight(redLight);
		countdown(3, () => {
			deactivateLight(redLight);
			activateLight(yellowLight);
			countdown(2, () => {
				deactivateLight(yellowLight);
				activateLight(greenLight);
				countdown(4, () => {
					deactivateLight(greenLight);
					activateLight(yellowLight);
					countdown(2, () => {
						deactivateLight(yellowLight);
						trafficLightSequence(); // Restart
					});
				});
			});
		});
	}
}

// Przełączanie trybu
document.getElementById("manual").addEventListener("click", () => {
	isManual = !isManual;
	if (!isManual) {
		trafficLightSequence();
	}
});

// Tryb ręczny
document.getElementById("redBtn").addEventListener("click", () => {
	if (isManual) {
		deactivateLight(yellowLight);
		deactivateLight(greenLight);
		activateLight(redLight);
		timerDisplay.textContent = 0;
	}
});

document.getElementById("yellowBtn").addEventListener("click", () => {
	if (isManual) {
		deactivateLight(redLight);
		deactivateLight(greenLight);
		activateLight(yellowLight);
		timerDisplay.textContent = 0;
	}
});

document.getElementById("greenBtn").addEventListener("click", () => {
	if (isManual) {
		deactivateLight(redLight);
		deactivateLight(yellowLight);
		activateLight(greenLight);
		timerDisplay.textContent = 0;
	}
});

// Start automatyczny
trafficLightSequence();
