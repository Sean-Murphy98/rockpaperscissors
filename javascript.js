function getComputerChoice(){
    let randN = Math.ceil(Math.random()*3);
    let choice = randN == 1 ? "Rock" : randN==2 ? "Paper" : "Scissors"
    return choice
}

function checkWin(humanScr, compScr){
    if (humanScr == 5){
        alert("You win! First to Five!")
        return true
    }
    else if (compScr == 5){
        alert("Computer wins :(")
        return true
    }
    return false
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    let humanWin = true;
    let computerWin = true;
    if (humanChoice == "Rock"){
        if (computerChoice == "Scissors"){
            computerWin = false
        }
        else if (computerChoice == "Paper"){
            humanWin = false
        }
    }
    else if (humanChoice == "Paper"){
        if (computerChoice == "Rock"){
            computerWin = false
        }
        else if (computerChoice == "Scissors"){
            humanWin = false
        }
    }
    else if (humanChoice == "Scissors"){
        if (computerChoice == "Paper"){
            computerWin = false
        }
        else if (computerChoice == "Rock"){
            humanWin = false
        }
    }

    else {
        console.log("Incorrect entry not caught, exiting...")
        return
    }
    let resultDiv = document.querySelector("#resultDiv");
    let humanScrDom = document.querySelector("#humanScr");
    let humanScr = parseInt(humanScrDom.innerText)
    let compScrDom = document.querySelector("#computerScr");
    let compScr = parseInt(compScrDom.innerText)
    if (humanWin == true && computerWin == true){
        resultDiv.textContent = "Tie!"
    }
    else if (humanWin == true){
        resultDiv.textContent = `You won! ${humanChoice} beats ${computerChoice.toLowerCase()}.`
        humanScrDom.textContent =  ++humanScr
    }
    else{
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice.toLowerCase()}.`
        compScrDom.textContent =  ++compScr
    }
    let winner = checkWin(humanScr, compScr)
    if (winner) {
        humanScrDom.textContent = 0;
        compScrDom.textContent = 0;
    }
    return
}

window.onload = (event) =>{
        // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(button.innerText);
    });
    });
}
