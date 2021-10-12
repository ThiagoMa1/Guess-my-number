"use strict";

const check = document.querySelector(".check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // If there is no input
  if (!guess) {
    message.textContent = "⛔ No number";
    // When a player wins
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    number.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    document.querySelector(".guess").style.display = "none";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥 You lose the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again
again.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = "Start guessing....";

  number.textContent = "?";

  body.style.backgroundColor = "#222";

  number.style.width = "15rem";

  guess.value = "";

  document.querySelector(".score").textContent = score = 20;

  document.querySelector(".guess").style.display = "block";
  console.log(secretNumber);
});
