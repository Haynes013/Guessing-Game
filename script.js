'use strict';

let score = 20;
let highScore = 0;
let secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function setText(selector, text) {
  document.querySelector(selector).textContent = text;
}

function setStyle(selector, property, value) {
  document.querySelector(selector).style[property] = value;
}

function displayMessage(message) {
  setText('.message', message);
}

function updateScore(newScore) {
  score = newScore;
  setText('.score', score);
}

function resetGame() {
  score = 20;
  secretNumber = generateRandomNumber();
  updateScore(score);
  setText('.number', '?');
  setText('.guess', '');
  displayMessage('Start guessing ...');
  setStyle('body', 'backgroundColor', '#222');
  setStyle('.number', 'width', '15rem');
  setText('.highscore', highScore);
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ Nothing Guessed');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('🏆 You Got It Right!');
    setText('.number', secretNumber);
    setStyle('body', 'backgroundColor', '#60b347');
    setStyle('.number', 'width', '30rem');

    if (score > highScore) {
      highScore = score;
      setText('.highscore', highScore);
    }
  } else {
    if (score > 1) {
      updateScore(score - 1);
      displayMessage(
        guess > secretNumber
          ? '🙅‍♂️ Nope Guess Lower ⬇️'
          : '🙅‍♂️ Nope Guess Higher ⬆️'
      );
    } else {
      displayMessage('🙅‍♂️ Damn you lost 😿');
      updateScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
