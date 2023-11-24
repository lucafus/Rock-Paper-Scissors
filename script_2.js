

let playerscore = 0;
let computerscore = 0;

function playRound (playerSelection, computerSelection) {

    if ( playerSelection === computerSelection) { return("Tied! Please try again")}
    
    else if ( playerSelection === "rock" && computerSelection === "scissors") {
        playerscore++; return("You win!");    } 
    
    else if ( playerSelection === "scissors" && computerSelection === "rock") {
        computerscore++; return("You lost!"); 
    } 
    
    else if ( playerSelection === "rock" && computerSelection === "paper") {
        return("You lost!"), computerscore++;
    } 
    
    else if ( playerSelection === "paper" && computerSelection === "rock") {
        playerscore++; return("You win!");
    } 
    
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        computerscore++; return("You lost!");
    } 
    
    else if ( playerSelection === "scissors" && computerSelection === "paper") {
        playerscore++; return("You win!");
    } 
    
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        computerscore++; return("You lost!");
    } 
    
    }
    
  
    function getComputerChoice () {
    
        const arr = ["rock" , "paper" , "scissors"]
        
       const random = Math.floor(Math.random() * arr.length);
        
       return arr[random] ;

           
    }
    
    const playerSelection = prompt("What is your selected weapon: ").toLowerCase(); 
    console.log ("You choose " +playerSelection.toLowerCase());
    
    let computerSelection;
    
    
    
    if (["rock", "paper", "scissors"].includes(playerSelection)) {
    
        const computerSelection = getComputerChoice ();
        const result = playRound(playerSelection, computerSelection);
        console.log (result)
    
    }
    
    else {console.log("Invalid Input, please choose rock, paper or scissors.") }
    
    console.log (playRound(playerSelection,computerSelection))

    function gamescore() {

        if (playerscore === 5 && computerscore < 5 ) { 
            return("You win!")
        }
             else { 
                return("You lost!")
            }
    }
    
  
  function game () {
    
    for (let i = 0; i < 5; i++ ) {
        const playerSelection = prompt("What is your selected weapon: ").toLowerCase(); 
        console.log ("You choose " +playerSelection.toLowerCase());
        getComputerChoice ();
        console.log (playRound (playerSelection, computerSelection));
        

  }
}    
 
      

      
    game();
    console.log (game());