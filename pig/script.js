"use strict";

//selecting elements
const score1El = document.getElementById("score--1");
const score0El = document.getElementById("score--0");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// rolling dice functionality
btnRoll.addEventListener("click", function () {
	//1. generating a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;
	console.log(dice);
	//2.display dice
	diceEl.classList.remove("hidden");
	diceEl.src = `dice-${dice}.png`;
	//3. check for rolled 1 : if true , switch to next player
	if (dice !== 1) {
		// Add the dice to current score
	} else {
		//Switch to the next player
	}
});
