
    
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
function playRound(computerChoice, humanChoice) {
    let result = document.querySelector('#result');
    if (humanChoice === null) 
    {
        return;
    }
    if (humanChoice === computerChoice) 
    {
        result.textContent = "It's a tie!";
        roundCounter++;
    } 
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) 
    {
        result.textContent = "You win!";
        humanScore++;
        roundCounter++;
    } 
    else 
    {
        result.textContent = "You lose!";
        computerScore++;
        roundCounter++;
    }
    updateScore();
    checkWinner();
}

function updateScore() {
    let humanScoreDisplay = document.querySelector('#human-score');
    let computerScoreDisplay = document.querySelector('#computer-score');
    let roundCounterDisplay = document.querySelector('#round-counter');
    humanScoreDisplay.textContent = "Your Score: " + humanScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    roundCounterDisplay.textContent = "Round: " + roundCounter;
}

function checkWinner() {
    if (humanScore === 5) 
    {
        alert("You win the game!\nWith a score of " + humanScore + " to " + computerScore);
    } 
    else if (computerScore === 5) 
    {
        alert("You lose the game!\nWith a score of " + humanScore + " to " + computerScore);
    }
}

//play a game of 5 rounds
function playGame() 
{   
    for (let i = 0; i < 5; i++) 
    {
        playRound(getComputerChoice(), getHumanChoice());
    }
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    if (humanScore > computerScore) 
    {
        console.log("You win the game!");
    } 
    else if (humanScore < computerScore) 
    {
        console.log("You lose the game!");
    } 
    else 
    {
        console.log("It's a tie game!");
    }
}

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound(getComputerChoice(), 'rock');
});

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound(getComputerChoice(), 'paper');
});

let scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound(getComputerChoice(), 'scissors');
});