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

function playRound(){
    let humanChoice = getHumanChoice().toLowerCase();
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
    if (humanWin == true && computerWin == true){
        console.log("Tie!")
    }
    else if (humanWin == true){
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
        humanScore += 1
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore += 1
    }
}

let humanScore, computerScore = 0;

playRound()