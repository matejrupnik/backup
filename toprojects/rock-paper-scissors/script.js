function computerPlay() {
    let x = Math.random() * 9;
    if (x <= 3){
        return `ROCK`
    } else if (x <= 6){
        return `PAPER`;
    } else if (x <= 9){
        return `SCISSORS`;
    } else {
        return `Error`;
    }
}

function round(playerSelection, computerSelection) {
    playerSelection = prompt(`Pls input`, ``).toUpperCase();
    computerSelection = computerPlay();
    if (playerSelection == `ROCK`) {
        if (computerSelection == `ROCK`){
            return `Tie! rock rock`;
        } else if (computerSelection == `PAPER`){
            return `You lose! rock paper`;
        } else if (computerSelection == `SCISSORS`){
            return `You win! rock scissors`;
        } else {
            return `Error`;
        }
    } else if (playerSelection == `PAPER`){
        if (computerSelection == `ROCK`){
            return `You win! paper rock`;
        } else if (computerSelection == `PAPER`){
            return `Tie! paper paper`;
        } else if (computerSelection == `SCISSORS`){
            return `You lose! paper scissors`;
        } else {
            return `Error`;
        }
    } else if (playerSelection == `SCISSORS`){
        if (computerSelection == `ROCK`){
            return `You lose! scissors rock`;
        } else if (computerSelection == `PAPER`){
            return `You win! scissors paper`;
        } else if (computerSelection == `SCISSORS`){
            return `Tie! scissors scissors`;
        } else {
            return `Error`;
        }
    } else {
        return `Error`;
    }
    

}

function game(){
    let scoreH = 0;
    let scoreC = 0;
    for (let i = 0; i < 5; i++) {
        let gameround = round();
        if (gameround == "Tie! paper paper" || gameround == "Tie! rock rock" || gameround == "Tie! scissors scissors"){
            console.log(`Tie - Player ${scoreH}, Computer ${scoreC}`);
        } else if (gameround == "You win! paper rock" || gameround == "You win! rock scissors" || gameround == "You win! scissors paper"){
            scoreH++;
            console.log(`You win - Player ${scoreH}, Computer ${scoreC}`);
        } else if (gameround == "You lose! paper scissors" || gameround == "You lose! rock paper" || gameround == "You lose! scissors rock") {
            scoreC++;
            console.log(`You lose - Player ${scoreH}, Computer ${scoreC}`);
        } else {
            i--;
            console.log(`Error`);
        }
        
    }
    if (scoreH > scoreC){
        console.log(`You Win!`);
    } else if (scoreH < scoreC){
        console.log(`You Lose!`);
    } else {
        console.log(`Error`);
    }
}

game();