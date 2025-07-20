'use strict';

let score = 20;

let number = Math.floor(Math.random() * 20) + 1;
let hs = (document.querySelector('.highscore').textContent = 0);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Nothing Guessed';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '🏆 You Got It Right!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hs) {
      hs = document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '🙅‍♂️ Nope Guess Lower ⬇️';
    } else {
      document.querySelector('.message').textContent = '🙅‍♂️ Damn you lost 😿';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        '🙅‍♂️ Nope Guess Higher ⬆️';
    } else {
      document.querySelector('.message').textContent = '🙅‍♂️ Damn you lost 😿';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '😭 Real Funny 😭';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  number = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = hs;
});
