// generate computer choice
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
}
// 
function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?").toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        alert("Are you sure you know how to play this game?");
        return null;
    }
    return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());