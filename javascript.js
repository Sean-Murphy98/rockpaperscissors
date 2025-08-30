function getComputerChoice(){
    let randN = Math.ceil(Math.random()*3);
    let choice = randN == 1 ? "Rock" : randN==2 ? "Paper" : "Scissors"
    console.log(choice)
    console.log(randN)
}

getComputerChoice()