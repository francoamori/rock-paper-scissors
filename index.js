function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * 3)
    
    return choices[choice]
}

function getPlayerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice;

    do {
        choice = prompt("Make your choice(Rock, paper, scissors)").toLowerCase()

        if (!choices.includes(choice))
            alert("Invalid option")
    } while (!choices.includes(choice))

    return choice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "Tie"

    if (playerChoice === "rock" && computerChoice === "paper") return "You lose! Paper beats rock"
    if (playerChoice === "rock" && computerChoice === "scissors") return "You win! Rock beats scissors"

    if (playerChoice === "paper" && computerChoice === "rock") return "You win! Paper beats rock"
    if (playerChoice === "paper" && computerChoice === "scissors") return "You lose! Scissors beats paper"

    if (playerChoice === "scissors" && computerChoice === "paper") return "You win! Scissors beats paper"
    if (playerChoice === "scissors" && computerChoice === "rock") return "You lose! Rock beats scissors"
}