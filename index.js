//Function to contain all functions of the game
const game = () => {
    let computerScore = 0;
    let playerScore = 0;
    let rounds = 0;

    const gameUI = document.querySelector('.gameUI');
    const startGameButton = document.querySelector('.startGame');
    const gameTitle = document.querySelector('.gameTitle');
    const playerSelection = document.querySelector('.playerChoice');
    const compSelection = document.querySelector('.compChoice');

    startGameButton.addEventListener('click', () => {
        gameUI.style.display = 'flex';
        startGameButton.style.display = 'none';
        gameTitle.innerText = 'Let\'s get ready to rumble!'
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //Plays the game
    const playGame = () => {
        const playerOptions = document.querySelector('.options');
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorsButton = document.querySelector('.scissors');
        const playerChoices = [rockButton, paperButton, scissorsButton];
        const rockPaperScissorsArray = ['rock', 'paper', 'scissors'];
        const roundsRemaining = document.querySelector('.roundNumber');

        //Begins playing the game
        playerChoices.forEach(option => {
            option.addEventListener('click', function(){

                //Counts the rounds left in the game
                ++rounds;
                roundsRemaining.innerText = `${rounds}`;

                //Selects a random choice for the computer
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = rockPaperScissorsArray[choiceNumber];
                
                //Function to check who wins
                playRound(this.className, computerChoice);

                if (rounds == 5) {
                    gameOver(playerOptions, roundsRemaining);
                }
            })
        })
    }

    //The program compares the selection of the user to that of the computer
    //based on: Rock > Scissors, Scissors > Paper, and Paper > Rock
    const playRound = (playerChoice, computerChoice) => {
        const roundResultText = document.querySelector('.resultText');
        const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
        const compScoreDisplay = document.querySelector('.compScoreDisplay');
        playerSelection.innerText = `You chose: ${capitalizeFirstLetter(playerChoice)}`;
        compSelection.innerText = `The computer chose: ${capitalizeFirstLetter(computerChoice)}`;

        let roundResult;

        if (playerChoice === computerChoice) {
            roundResult = `Tie game! You both picked ${capitalizeFirstLetter(playerChoice)}!`
        } else if (playerChoice === "rock" && computerChoice === "scissors" ||
                playerChoice === "scissors" && computerChoice === "paper" || 
                playerChoice === "paper" && computerChoice === "rock") {
            roundResult = `${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}! You win!`
            ++playerScore;
        } else {
            roundResult = `${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}! You lose!`
            ++computerScore;
        }

        roundResultText.innerText = `${roundResult}`;
        playerScoreDisplay.innerText = `${playerScore}`;
        compScoreDisplay.innerText = `${computerScore}`;
    }

    const gameOver = (playerOptions, roundsRemaining) => {
        const roundResultText = document.querySelector('.resultText');
        const reloadButton = document.querySelector('.reloadButton');

        gameTitle.innerText = `Game Over!`;
        playerOptions.style.display = 'none';
        playerSelection.style.display = 'none';
        compSelection.style.display = 'none';
       
        if (playerScore > computerScore) {
            roundResultText.innerText = `You win, ${playerScore} to ${computerScore}!`;
        } else if (computerScore > playerScore) {
            roundResultText.innerText = `You lose, ${computerScore} to ${playerScore}!`
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