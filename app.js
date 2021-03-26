import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';


const buttonEl = document.querySelector('#button');
const resetButton = document.querySelector('#reset-button');
const gameResults = document.querySelector('#game-results');
const drawCount = document.querySelector('#draw-count');
const winCount = document.querySelector('#win-count');
const loseCount = document.querySelector('#lose-count');


let draws = 0;
let wins = 0;
let losses = 0;


buttonEl.addEventListener('click', () => {


    const currentlySelectedRadioButton = document.querySelector('input:checked');
    
    let computerThrow = getRandomThrow();
    let playerThrow = currentlySelectedRadioButton.value;
    let resultOfGame = didUserWin(playerThrow, computerThrow);

    if (resultOfGame === 'draw') {
        draws++;
        drawCount.textContent = draws;
        gameResults.textContent = `It's a Draw!`;
    } else if (resultOfGame === 'win') {
        wins++;
        winCount.textContent = wins;
        gameResults.textContent = 'You win!';
    } else {
        losses++;
        loseCount.textContent = losses;
        gameResults.textContent = 'You lose!';
    }
});


resetButton.addEventListener('click', () => {
    gameResults.textContent = '';
    draws = 0;
    wins = 0;
    losses = 0;
    drawCount.textContent = 0;
    winCount.textContent = 0;
    loseCount.textContent = 0;

});

