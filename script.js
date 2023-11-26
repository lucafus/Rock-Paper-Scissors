
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

function getComputerChoice () {

    const arr = ["rock" , "paper" , "scissors"]
    
   const random = Math.floor(Math.random() * arr.length);
    
   return arr[random] ;

}

const playerSelection = prompt("What is your selected weapon: ").toLowerCase(); 

let computerSelection

if (["rock", "paper", "scissors"].includes(playerSelection)) {

    const computerSelection = getComputerChoice ();
    const result = playRound(playerSelection, computerSelection);
    console.log (result)
}

else {
    
    console.log("Invalid Input, please choose rock, paper or scissors."); 

}


