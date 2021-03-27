const container = document.querySelector('#scoreboard');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#pcScore');

const resultDisplay = document.createElement('p');
const winnerDisplay = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button i');
buttons.forEach((button) => button.addEventListener('click', play));

container.appendChild(resultDisplay);
container.appendChild(winnerDisplay);

const buttonTransform = document.querySelectorAll('button');
buttonTransform.forEach((button) =>
  button.addEventListener('transitionend', removeTransition)
);

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function play(e) {
  if (isGameOver()) {
    alert('Game over! Please refresh to play again!');
    return;
  }
  const playerChoice = document.querySelector(
    `button[data-key = "${e.target.parentNode.id}"]`
  );

  playerChoice.classList.toggle('playing');

  resultDisplay.textContent = playRound(playerChoice.id, computerPlay());
  winnerDisplay.textContent = decideWinner();
}

// Computer making random choice
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'rock';
  } else if (random === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// player vs computer, write out the result and keep track of scores
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScoreDisplay.textContent = ++computerScore;
    return 'You lose! Paper beats Rock';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScoreDisplay.textContent = ++playerScore;
    return 'You win! Rock beats Scissors';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScoreDisplay.textContent = ++computerScore;
    return 'You lose! Scissors beats Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScoreDisplay.textContent = ++playerScore;
    return 'You win! Paper beats Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScoreDisplay.textContent = ++computerScore;
    return 'You lose! Rock beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScoreDisplay.textContent = ++playerScore;
    return 'You win! Scissors beats Paper';
  } else {
    return 'Draw';
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function decideWinner() {
  if (playerScore === 5) {
    return 'Congratulations you win!';
  } else if (computerScore === 5) {
    return 'Sorry you lose. Please try again';
  }
}
// global variables to keep track of scores

// play 5 rounds, update the scores and announce the winner
//   function game() {
//     for (i = 0; i < 5; i++) {
//       let player = prompt("What's your move?");
//       console.log(playRound(player.toLowerCase(), computerPlay()));
//     }
//     if (playerScore > computerScore) {
//       console.log(
//         `Congratulations. You won the game with a score of ${playerScore}-${computerScore}`
//       );
//     } else if (playerScore < computerScore) {
//       console.log(
//         `Sorry. You lost the game by ${playerScore}-${computerScore}`
//       );
//     } else {
//       console.log("It's a draw!");
//     }
//   }
//   game();
