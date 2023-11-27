
// By declaring both of these variables with a 0 I can start using them as a part of the score system // 

let playerscore = 0;
let computerscore = 0;

// If function that will compare the player and computer selection and return a message depending on the result //

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

// Function that will select a random value from a set of arrays using the Math resource, this will be used in the playRound function above //

function getComputerChoice() {
  const arr = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
}

let computerSelection;
let playerSelection;

console.log(playRound(playerSelection, computerSelection));

// By using a loop function the function is going to keep going until the playerscore until the score is 5 
// This is going to be set up in an if function that will show a message depending on the result 


function gamescore() {
  if (playerscore >= 5 && computerscore < 5) {
    console.log("You win the five rounds, congratulations!");
  } else {
    console.log("You lost, too bad!");
  }
}

// By using a loop function the function is going to keep going until the playerscore until the score is 5,
// Inside this function called game it I will put the prompt and round variable selection from the player and computer, by doing this inside the loop It will repeat the game until the score is set //

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "What is your selected weapon: "
    ).toLowerCase();
    console.log("You choose " + playerSelection);

    if (["rock", "paper", "scissors"].includes(playerSelection)) {
      const computerSelection = getComputerChoice();
      console.log("Computer choose " + computerSelection);
      console.log(playRound(playerSelection, computerSelection));
    } else {
      console.log("Invalid Input, please choose rock, paper or scissors.");
    }
  }

// I will launch the gamescore inside the game function to log in all of the result and show the message depending on the result  

  gamescore();
}

// This will launch the function game and start the process

game();
