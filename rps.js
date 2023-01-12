function getComputerChoice() {
    const x = Math.floor(Math.random()*3);
    if (x == 0) {
        return "ROCK";
    }
    else if (x == 1) {
        return "SCISSORS";
    }
    else {
        return "PAPER";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        return `You Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        return `You Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        return `You Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    else {
        return `Bad Input! Type your input again`;
    }
}
const body = document.querySelector('body');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerscore = document.querySelector('.playerscore');
const compscore = document.querySelector('.compscore');
const round = document.querySelector('.round');
const restart = document.querySelector('.restart');
const result = document.querySelector('.result');


let pscore = 0;
let cscore = 0;

function restartCall() {
    pscore = 0;
    cscore = 0;
    playerscore.textContent = `Player Score: ${pscore}`;
    compscore.textContent = `Computer Score: ${cscore}`;
    round.textContent = "";
    result.textContent = "";
}

function userCall(p) {
    if (pscore == 5 || cscore == 5) {
        result.textContent = "Restart the game first!";
    }
    else {
        const c = getComputerChoice();
        const output = playRound(p, c);

        round.textContent = output;

        if (round.textContent.includes("Win")) {
            pscore += 1;
            playerscore.textContent = `Player Score: ${pscore}`;
        }
        else if (round.textContent.includes("Lose")) {
            cscore += 1;
            compscore.textContent = `Computer Score: ${cscore}`;
        }

        if (pscore == 5 || cscore == 5) {
            let msg = "";
            if (pscore == 5) {
                msg = "You Win :)";
            } 
            else {
                msg = "You Lose :(";
            }
            result.textContent = msg;
        }
        console.log(`${pscore} ${cscore} ${round.textContent}`);
    }
}


rock.addEventListener('click', () => {userCall("ROCK")} );
paper.addEventListener('click', () => {userCall("PAPER")} );
scissors.addEventListener('click', () => {userCall("SCISSORS")} );
restart.addEventListener('click', () => {restartCall(pscore, cscore)});




// function game() {
//     let pscore = 0;
//     let cscore = 0;
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt().toUpperCase();
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection);
//         console.log(result);
//         if (result.includes("Win")) {
//             pscore += 1;
//         }
//         else if (result.includes("Lose")) {
//             cscore += 1;
//         }
//     }
//     if (pscore > cscore) {
//         console.log("You beat the Computer :)")
//     }
//     else if (pscore < cscore) {
//         console.log("You lost against the Computer :(")
//     }
//     else {
//         console.log("You tied against the Computer :|")
//     }
// }

