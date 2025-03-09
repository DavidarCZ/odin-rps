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

//play a game of 5 rounds
function playGame() 
{   
    let humanScore = 0;
    let computerScore = 0;
    //play a round of rps    
    function playRound(computerChoice, humanChoice) {
        
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

playGame();