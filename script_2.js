// I create two variables with both score from 0


let playerscore = 0;
let computerscore = 0;


// By using DOM method is create a variable that alligns the score text from my html with the ones from javascript
//I do the same with the three buttons, this will be use further in the code

const playerscoreE = document.querySelector ('#playerscore');
const computerscoreE = document.querySelector ('#computerscore');
const result = document.querySelector('#result')

const btnr = document.querySelector('#btnr');
const btns = document.querySelector('#btns');
const btnp = document.querySelector('#btnp');

//I create function that will select from an array a random value using the method math.random

function computerSelection() {
  const arr = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

let playerSelection ;

//The playround function will use the player and computer selection inside an if function. This will check different instnaces of the game
//I use operands to join the player and computer selection inside one brackets to make the code more clear
// Each time anyone lose it will add a poin in the score section 
//This will be shown in the webpage by using the DOM method of .textContent and the previously created variable

function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tied! Please try again";
  } else if ( (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ) 

  {playerscore++; 
   playerscoreE.textContent = "Player Score: " + playerscore;
   return "You win!";}
  
  else {computerscore++; 
        computerscoreE.textContent = "Computer Score: " + computerscore;
        return "You lost!";
       
       }
}

// If anyone of the scores reach up to 5 it will show a message depending on the result

function gamescore() {
  if (playerscore >= 5 || computerscore >= 5) {
    console.log("You win the five rounds, congratulations!");
  } else {
    console.log("You lost, too bad!");
  }
}


//This will add an eventlistener to each of the buttons, inside it a function that will definde the playerSelection value and it will activate
//The playround with the variable and the computer selection function also to finish it will launch the gamescore. 
//By doing this it will add the result of each game. 

btnr.addEventListener('click', () => {
playerSelection = "rock";
  playRound( playerSelection ,computerSelection() )
  gamescore();; } );
  
  
btns.addEventListener('click', () => {
playerSelection = "scissors";
    playRound( playerSelection ,computerSelection() )
  gamescore();; } );


btnp.addEventListener('click', () => {
playerSelection = "paper";
    playRound(playerSelection ,computerSelection() ); 
gamescore();} );



