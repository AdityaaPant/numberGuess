"use strict";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 13;
// document.querySelector(".guess").value = 25;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);

	if (!guess) {
		displayMessage("no number");
	} else if (guess == secretNumber) {
		displayMessage("correct number");
		document.querySelector(".number").textContent = secretNumber;

		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "too high" : "too low");

			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "you lost the game ";
			document.querySelector(".score").textContent = 0;
		}
	}
});
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	displayMessage("start guessing...");
	cd;
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});
