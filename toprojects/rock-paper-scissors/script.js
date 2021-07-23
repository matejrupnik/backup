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

/* function round(playerSelection, computerSelection) {
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
    

} */

let rezH = 0;
let rezC = 0;
const rezDiv = document.querySelector(`#rezultat`);



function round(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection == `ROCK`) {
        if (computerSelection == `ROCK`){
            console.log(`Tie! rock rock`);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else if (computerSelection == `PAPER`){
            console.log(`You lose! rock paper`);
            rezC++;
            console.log(rezC);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else if (computerSelection == `SCISSORS`){
            console.log(`You win! rock scissors`);
            rezH++;
            console.log(rezH);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else {
            console.log(`Error`);
        }
    } else if (playerSelection == `PAPER`){
        if (computerSelection == `ROCK`){
            console.log(`You win! paper rock`);
            rezH++;
            console.log(rezH);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else if (computerSelection == `PAPER`){
            console.log(`Tie! paper paper`);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else if (computerSelection == `SCISSORS`){
            console.log(`You lose! paper scissors`);
            rezC++;
            console.log(rezC);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else {
            console.log(`Error`);
        }
    } else if (playerSelection == `SCISSORS`){
        if (computerSelection == `ROCK`){
            console.log(`You lose! scissors rock`);
            rezC++;
            console.log(rezC);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else if (computerSelection == `PAPER`){
            console.log(`You win! scissors paper`);
            rezH++;
            console.log(rezH);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else if (computerSelection == `SCISSORS`){
            console.log(`Tie! scissors scissors`);
            rezDiv.textContent = rezH + `:` + rezC;
            if (rezH == 5) {
    rezDiv.textContent = `You win!`;
} else if (rezC == 5) {
    rezDiv.textContent = `You lose!`;
}
        } else {
            console.log(`Error`);
        }
    } else {
        console.log(`Error`);
    }
    

}

/* function game(){
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
 */
const btn1 = document.getElementById(`btn1`);
btn1.addEventListener("click", function() {round(`ROCK`);});
const btn2 = document.getElementById(`btn2`);
btn2.addEventListener("click", function() {round(`PAPER`);});
const btn3 = document.getElementById(`btn3`);
btn3.addEventListener("click", function() {round(`SCISSORS`);});





/* game(); */