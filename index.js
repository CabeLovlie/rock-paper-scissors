let computerScore = 0;
let playerScore = 0;

//The program promps the user to select Rock, Paper, or Scissors
function getPlayerChoice() {
    string = prompt("Choose Rock, Paper, or Scissors!");
    let playerSelection = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    return playerSelection;
}

//The program then randomly generate the computer's selection
function getComputerChoice() {
    const rockPaperScissorsArray = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * rockPaperScissorsArray.length);

    return rockPaperScissorsArray[random];
}

//The program compares the selection of the user to that of the computer
//based on: Rock > Scissors, Scissors > Paper, and Paper > Rock
function playRound(playerChoice, computerChoice) {
    let roundResult;

    if (playerChoice === computerChoice) {
        roundResult = `Tie game! You both picked ${playerChoice}`
    } else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
               playerChoice === "Scissors" && computerChoice === "Paper" || 
               playerChoice === "Paper" && computerChoice === "Rock") {
        roundResult = "Rock beats Scissors! You win!"
        ++playerScore;
    } else {
        roundResult = `${computerChoice} beats ${playerChoice}! You lose!`
        ++computerScore;
    }

    alert(roundResult);
    console.log(roundResult);
    console.log(playerScore, computerScore)
    return computerScore, playerScore;
}

//Play 5 rounds, keeping track of the winner for each round
function game() {
    for (let i = 0; i <= 4; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        playRound(playerChoice, computerChoice);
    }

    finalScore();
}

//At the end of 5 rounds display the finial winner and score
function displayFinalScore(){
    if (playerScore > computerScore) {
        alert(`You win the game ${playerScore} rounds to ${computerScore}!`)
    } else if (computerScore > playerScore) {
        alert(`You lose the game ${computerScore} rounds to ${playerScore}!`)
    } else {
        alert("The game ended in a tie!")
    }
}