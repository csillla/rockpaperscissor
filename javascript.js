console.log('Hello World!');

let random = Math.random();
let computerChoice;

function getComputerChoice() {
    if (random < (1/3)) {
       computerChoice = 'rock'; 
    } else if (random > (1/3) && random < (2/3)) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }
}

let humanChoice;

function getHumanChoice() {
    humanChoice = prompt('Chose rock, paper or scissors!', 'rock');
}

getComputerChoice();
console.log(computerChoice);

getHumanChoice();
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);

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
    }  else if ((computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'rock')) {
        console.log('Nice win!');
        humanScore ++;
    } else {
        console.log('You typed something wrong, try again!')
    }
}

playRound(humanChoice, computerChoice);