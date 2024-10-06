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
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        console.log('You typed something incorrect!');
    }
}

getComputerChoice();
console.log(computerChoice);

getHumanChoice();
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;