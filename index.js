const container = document.querySelector('#container');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#pcScore');

const resultDisplay = document.createElement('p');
const winnerDisplay = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', play));
container.appendChild(resultDisplay);
container.appendChild(winnerDisplay);

function play(e) {
  if (isGameOver()) {
    alert('Game over! Please refresh to play again!');
    return;
  }
  const playerChoice = document.querySelector(
    `button[data-key = "${e.target.textContent}"]`
  );
  resultDisplay.textContent = playRound(
    playerChoice.textContent,
    computerPlay()
  );
  winnerDisplay.textContent = decideWinner();
}

// Computer making random choice
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Rock';
  } else if (random === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// player vs computer, write out the result and keep track of scores
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerScoreDisplay.textContent = ++computerScore;
    return 'You lose! Paper beats Rock';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScoreDisplay.textContent = ++playerScore;
    return 'You win! Rock beats Scissors';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerScoreDisplay.textContent = ++computerScore;
    return 'You lose! Scissors beats Paper';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerScoreDisplay.textContent = ++playerScore;
    return 'You win! Paper beats Rock';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerScoreDisplay.textContent = ++computerScore;
    return 'You lose! Rock beats Scissors';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
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
