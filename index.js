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

function getResults(winCounter, loseCounter, tieCounter) {
    if (winCounter > loseCounter)
        return "You win!"
    if (loseCounter > winCounter)
        return "The computer wins"

    return "It's a tie"
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

function game() {
    let tieCounter = winCounter = loseCounter = 0;
    let result;

    for (let i = 0; i < 5; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice())

        console.log(result)

        if (result === "Tie") tieCounter++

        else if (result.includes("You win!"))
            winCounter++
        else
            loseCounter++
    }

    alert(`Player: ${winCounter} | Computer: ${loseCounter} | Ties: ${tieCounter}\n${getResults(winCounter, loseCounter, tieCounter)}`)
}

game()