let playerscore = 0;
let computerscore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tied! Please try again";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerscore++;
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerscore++;
    return "You lost!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lost!", computerscore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerscore++;
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerscore++;
    return "You lost!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerscore++;
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerscore++;
    return "You lost!";
  }
}

function getComputerChoice() {
  const arr = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
}

let computerSelection;
let playerSelection;


  


console.log(playRound(playerSelection, computerSelection));

function gamescore() {
  if (playerscore >= 5 && computerscore < 5) {
    console.log("You win the five rounds, congratulations!");
  } else {
    console.log("You lost, too bad!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("What is your selected weapon: ").toLowerCase();
    console.log("You choose " + playerSelection);

    if (["rock", "paper", "scissors"].includes(playerSelection)) {
      const computerSelection = getComputerChoice();
    console.log("Computer choose " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  } else {
    console.log("Invalid Input, please choose rock, paper or scissors.");
  }
  }

  gamescore();
}

game();
