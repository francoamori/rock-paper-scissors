const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const result = document.querySelector(".result");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

let resultsObj = {
    player: 0,
    computer: 0,
    ties: 0
}

rockBtn.addEventListener("click", e => play(e.target.value));
paperBtn.addEventListener("click", e => play(e.target.value));
scissorsBtn.addEventListener("click", e => play(e.target.value));

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * 3)
    
    return choices[choice]
}

function getResults(winCounter, loseCounter, tieCounter) {
    if (winCounter > loseCounter)
        return "You win!";
    if (loseCounter > winCounter)
        return "The computer wins";

    return "It's a tie";
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "Tie";

    if (playerChoice === "rock" && computerChoice === "paper") return "You lose! Paper beats rock";
    if (playerChoice === "rock" && computerChoice === "scissors") return "You win! Rock beats scissors";

    if (playerChoice === "paper" && computerChoice === "rock") return "You win! Paper beats rock";
    if (playerChoice === "paper" && computerChoice === "scissors") return "You lose! Scissors beats paper";

    if (playerChoice === "scissors" && computerChoice === "paper") return "You win! Scissors beats paper";
    if (playerChoice === "scissors" && computerChoice === "rock") return "You lose! Rock beats scissors";
}

function play(playerChoice) {
    const roundResult = playRound(playerChoice, getComputerChoice());;

    if (roundResult.includes("You win!"))
        resultsObj.player++
    else if (roundResult.includes("You lose!"))
        resultsObj.computer++
    else
        resultsObj.ties++


    result.textContent = roundResult;
    console.log(resultsObj)
}