
function playRound (playerSelection, computerSelection) {

    if ( playerSelection === computerSelection) { return("Tied! Please try again")}
    
    else if ( playerSelection === "rock" && computerSelection === "scissors") {
            return("You win!"), playerscore++;    } 
    
    else if ( playerSelection === "scissors" && computerSelection === "rock") {
        return("You lost!"), computerscore++;
    } 
    
    else if ( playerSelection === "rock" && computerSelection === "paper") {
        return("You lost!"), computerscore++;
    } 
    
    else if ( playerSelection === "paper" && computerSelection === "rock") {
        return("You win!") , playerscore++;
    } 
    
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        return("You lost!") , computerscore++
    } 
    
    else if ( playerSelection === "scissors" && computerSelection === "paper") {
        return("You win!") , playerscore++;
    } 
    
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        return("You lost!") , computerscore++
    } 
    
    }
    
  
    function getComputerChoice () {
    
        const arr = ["rock" , "paper" , "scissors"]
        
       const random = Math.floor(Math.random() * arr.length);
        
       return arr[random] ;
    
    }
    
    const playerSelection = prompt("What is your selected weapon: ").toLowerCase(); if (["rock", "paper", "scissors"].includes(playerSelection)) {
    
        const computerSelection = getComputerChoice ();
        const result = playRound(playerSelection, computerSelection);
        console.log (result)
    
    }
    
    else {console.log("Invalid Input, please choose rock, paper or scissors.") }
    
    console.log (playRound(playerSelection,computerSelection))

    let playerscore = 0;
    let computerscore = 0;