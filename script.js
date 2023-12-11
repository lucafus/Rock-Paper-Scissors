

// If function that will compare the player and computer selection and return a message depending on the result //

function playRound (playerSelection, computerSelection) {

 
if ( playerSelection === computerSelection) { return("Tied! Please try again")}

    else if ( playerSelection === "rock" && computerSelection === "scissors") {
        return("You win! Rock beats Scissors") 
} 
else if ( playerSelection === "scissors" && computerSelection === "rock") {
    return("You lost! Rock beats Scissors") 
} 

else if ( playerSelection === "rock" && computerSelection === "paper") {
    return("You lost! Paper beats Rock") 
} 

else if ( playerSelection === "paper" && computerSelection === "rock") {
    return("You win! Paper beats Rock") 
} 

else if ( playerSelection === "paper" && computerSelection === "scissors") {
    return("You lost! Scissors beats Paper") 
} 

else if ( playerSelection === "scissors" && computerSelection === "paper") {
    return("You win! Scissors beats Paper") 
} 

else if ( playerSelection === "paper" && computerSelection === "scissors") {
    return("You lost! Scissors beats Paper") 
} 

}

// Function that will select a random value from a set of arrays using the Math resource, this will be used in the playRound function above //

function getComputerChoice () {

    const arr = ["rock" , "paper" , "scissors"]
    
   const random = Math.floor(Math.random() * arr.length);
    
   return arr[random] ;

}

// A prompt that will appear the moment the script is launched, It will ask you for a value and return the result of it. I will be using .toLowerCase to accept any variation of the allowed values //

const playerSelection = prompt("What is your selected weapon: ").toLowerCase(); 
console.log("You choose " + playerSelection.toLowerCase());

let computerSelection

// If function that will reject any value other than rock,paper or scissors

if (["rock", "paper", "scissors"].includes(playerSelection)) {

    const computerSelection = getComputerChoice ();
    console.log("Computer choose " + computerSelection.toLowerCase());
    const result = playRound(playerSelection, computerSelection);
    console.log (result)
}

else {
    
    console.log("Invalid Input, please choose rock, paper or scissors."); 

}


