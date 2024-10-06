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

getComputerChoice();
console.log(computerChoice);