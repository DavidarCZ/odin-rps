let humanScore = 0;
let computerScore = 0;

// generate computer choice
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) 
    {
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

//prompt user for choice
function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?").toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') 
    {
        alert("Are you sure you know how to play this game?");
        return null;
    }
    return choice;
}

//play a round of rps
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    
    if (humanChoice === null) 
    {
        return;
    }

    if (humanChoice === computerChoice) 
    {
      console.log("It's a tie!");
    } 
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) 
    {
        console.log("You win!");
        humanScore++;
    } 
    else 
    {
        console.log("You lose!");
        computerScore++;
    }
}



playRound();