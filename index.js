//Function to contain all functions of the game
const game = () => {
    let computerScore = 0;
    let playerScore = 0;
    let rounds = 5;

    const gameUI = document.querySelector('.gameUI');
    const startGameButton = document.querySelector('.startGame');

    startGameButton.addEventListener('click', () => {
        gameUI.style.display = 'flex';
        startGameButton.style.display = 'none';
    });

    //Plays the game
    const playGame = () => {
        const playerOptions = document.querySelector('.options');
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorsButton = document.querySelector('.scissors');
        const playerChoices = [rockButton, paperButton, scissorsButton];
        const rockPaperScissorsArray = ['Rock', 'Paper', 'Scissors'];
        const roundsDisplay = document.querySelector('.rounds');

        //Begins playing the game
        playerChoices.forEach(option => {
            option.addEventListener('click', function(){

                //Counts the rounds left in the game
                const roundsRemaining = document.querySelector('.roundsRemaining');
                --rounds;
                roundsRemaining.innerText = `Rounds remaining: ${rounds}`;

                //Selects a random choice for the computer
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = rockPaperScissorsArray[choiceNumber];
                
                //Function to check who wins
                playRound(this.innerText, computerChoice);

                if (rounds == 0) {
                    console.log('game over');
                    gameOver(playerOptions, roundsDisplay);
                }
            })
        })
    }

    //The program compares the selection of the user to that of the computer
    //based on: Rock > Scissors, Scissors > Paper, and Paper > Rock
    const playRound = (playerChoice, computerChoice) => {
        const playerSelection = document.querySelector('.playerChoice');
        const compSelection = document.querySelector('.compChoice');
        const roundResultText = document.querySelector('.resultText');
        const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
        const compScoreDisplay = document.querySelector('.compScoreDisplay');
        playerSelection.innerText = `The player chose: ${playerChoice}`;
        compSelection.innerText = `The computer chose: ${computerChoice}`;

        let roundResult;

        if (playerChoice === computerChoice) {
            roundResult = `Tie game! You both picked ${playerChoice}!`
        } else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
                playerChoice === "Scissors" && computerChoice === "Paper" || 
                playerChoice === "Paper" && computerChoice === "Rock") {
            roundResult = `${playerChoice} beats ${computerChoice}! You win!`
            ++playerScore;
        } else {
            roundResult = `${computerChoice} beats ${playerChoice}! You lose!`
            ++computerScore;
        }

        roundResultText.innerText = `The result of the round was: ${roundResult}`;
        playerScoreDisplay.innerText = `Your Score: ${playerScore}`;
        compScoreDisplay.innerText = `Computer's Score: ${computerScore}`;
    }

    const gameOver = (playerOptions, roundsDisplay) => {
        const roundResultText = document.querySelector('.resultText');
        const reloadButton = document.querySelector('.reloadButton');

        roundsDisplay.innerText = `Game Over!`;
        playerOptions.style.display = 'none';
       
        if (playerScore > computerScore) {
            roundResultText.innerText = `You win, ${playerScore} rounds to ${computerScore} rounds!`;
        } else if (computerScore > playerScore) {
            roundResultText.innerText = `You lose, ${computerScore} rounds to ${playerScore} rounds!`
        } else {
            roundResultText.innerText = `The game ends in a tie!`;
        }

        reloadButton.innerText = 'Restart the game?';
        reloadButton.style.display = 'flex';
        reloadButton.addEventListener('click', () => {
            window.location.reload();
            startGameButton.style.display = 'none';
        })
    }

    playGame();
}

game();