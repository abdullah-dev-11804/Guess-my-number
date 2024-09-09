'use strict';
// Buttons
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
// Selecting Elements
const message = document.querySelector('.message');
const gameScore = document.querySelector('.score');
const box = document.querySelector('.number');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
// Secret Number
let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highestScore = [];
// Function for initial conditions
function initial() {
  number = Math.floor(Math.random() * 20 + 1);
  message.textContent = 'Start Guessing...';
  gameScore.textContent = 0;
  box.textContent = '?';
  document.querySelector('.guess').value = '';
  console.log(highestScore);
  highScore.textContent =
    Math.max(...highestScore) < 0 ? 0 : Math.max(...highestScore);
  body.style.backgroundColor = '#222';
}
checkBtn.addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (guessNumber > number) {
    message.textContent = 'Too High';
    score--;
  } else if (guessNumber < number) {
    message.textContent = 'Too Low';
    score--;
  } else {
    message.textContent = 'You guessed it right';
    box.textContent = number;
    body.style.backgroundColor = '#60b347';

    highestScore.push(score);
  }
  if (score == 0) {
    initial();
    message.textContent = 'You loss the game';
  } else {
    gameScore.textContent = score;
  }
});
againBtn.addEventListener('click', initial);
