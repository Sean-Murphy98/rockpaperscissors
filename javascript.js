function getComputerChoice(){
    let randN = Math.ceil(Math.random()*3);
    let choice = randN == 1 ? "rock" : randN==2 ? "paper" : "scissors"
    console.log(choice)
    return choice
}

function getHumanChoice(){
    let choice = prompt("What do you choose?")
    console.log(choice)
    return choice
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    let humanWin = true;
    let computerWin = true;
    if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            computerWin = false
        }
        else if (computerChoice == "paper"){
            humanWin = false
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            computerWin = false
        }
        else if (computerChoice == "scissors"){
            humanWin = false
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            computerWin = false
        }
        else if (computerChoice == "rock"){
            humanWin = false
        }
    }

    else {
        console.log("Incorrect entry not caught, exiting...")
        return
    }
    let resultDiv = document.querySelector("#resultDiv");
    if (humanWin == true && computerWin == true){
        resultDiv.textContent = "Tie!"
        result = "tie"
    }
    else if (humanWin == true){
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
        result = "human"
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        result = "computer"
    }
    return result
}

function playGame(){
    let humanScore= 0;
    let computerScore = 0;
    let winner = ""
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(button.innerText.toLowerCase());
    });
    });
    /*
    for (i=0; i<5; i++){
        winner = playRound(humanScore, computerScore)
        if (winner == "human") {
            humanScore += 1
        }
        else if (winner == "computer"){
            computerScore += 1
        }
    }
    let whoWon = humanScore > computerScore ? "Human Wins!" : humanScore == computerScore ? "Tie" : "Computer Wins!"
    console.log(whoWon)
    console.log(humanScore)
    console.log(computerScore)*/
}
/*
const btnRock = document.querySelector("#btnRock");
console.log(btnRock.innerText)
btnRock.addEventListener("click", () => {
  playRound("rock");
});
const btnScissors = document.querySelector("#btnScissors");
btnRock.addEventListener("click", () => {
  playRound("scissors");
});
const btnPaper = document.querySelector("#btnPaper");
btnRock.addEventListener("click", () => {
  playRound("rock");
});
*/
window.onload = (event) =>{
    playGame()
}
