console.log('Hello World!');


/* setting computerChoice function */
let computerChoice;

function getComputerChoice() {
    let random = Math.random();
    if (random < (1/3)) {
       computerChoice = 'rock'; 
    } else if (random > (1/3) && random < (2/3)) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
}


/* setting humanChoice function */
let humanChoice;

function getHumanChoice() {
    humanChoice = prompt('Chose rock, paper or scissors!', 'rock');
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        console.log('You typed something wrong, try again!');
        getHumanChoice();
    }
}


/* setting score variables */
let humanScore = 0;
let computerScore = 0;

/* function for one round, log the result, log the new score */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        humanScore ++;
        computerScore ++;
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log('Oh no!');
        computerScore ++;
    }  else {
        console.log('Nice win!');
        humanScore ++;
    }
    console.log(humanScore, computerScore);
}


/* setting the game with 5 rounds, log the final result */
function playGame() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getHumanChoice();
        humanChoice = humanChoice.toLowerCase();
        playRound(humanChoice, computerChoice);
    }

    if (computerScore < humanScore) {
        console.log('Congrats! You won the game!');
    } else if (computerScore === humanScore) {
        console.log("It's a tie, noone won!");
    } else {
        console.log('You loose:((')
    }
}

playGame();