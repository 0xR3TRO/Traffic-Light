const redLight = document.querySelector(".light.red");
const yellowLight = document.querySelector(".light.yellow");
const greenLight = document.querySelector(".light.green");

function activateLight(light) {
	light.classList.add("active");
}

function deactivateLight(light) {
	light.classList.remove("active");
}

function trafficLightSequence() {
	// Red light on for 3 seconds
	activateLight(redLight);
	setTimeout(() => {
		deactivateLight(redLight);
		activateLight(yellowLight);
		activateLight(redLight); // Red + Yellow together for 2 seconds
	}, 3000);

	setTimeout(() => {
		deactivateLight(yellowLight);
		deactivateLight(redLight);
		activateLight(greenLight); // Green on for 4 seconds
	}, 5000);

	setTimeout(() => {
		deactivateLight(greenLight);
		activateLight(yellowLight); // Yellow on for 2 seconds before going back to red
	}, 9000);

	setTimeout(() => {
		deactivateLight(yellowLight);
		trafficLightSequence(); // Restart the sequence
	}, 11000);
}

trafficLightSequence();
