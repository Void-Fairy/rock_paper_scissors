/*
 * GENERATE random whole number n [0;1)
 * IF n < 0,33 RETURN 1
 * ELSE IF n < 0,66 RETURN 2
 * ELSE IF n < 1 RETURN 3
*/
function getComputerChoice() {
  let randomValue = Math.random();
  if (randomValue < 0.333) {
    return 1;
  } else if (randomValue < 0.666) {
    return 2;
  } else if (randomValue < 1) {
    return 3;
  }
}

/*
 * DISPLAY input field with string containing instructions
 * GET human choice as variable
 * IF case1 RETURN 1
 * ELSE IF case2 RETURN 2
 * ELSE IF case3 RETURN 3
*/
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
  if (humanChoice == "rock") {
    return 1;
  } else if (humanChoice == "paper") {
    return 2;
  } else if (humanChoice == "scissors") {
    return 3;
  }
}

//variables for future use
let computerScore = 0;
let humanScore = 0;
let tieScore = 0;

/*
 * 1x = computerx
 * 2x = humanx
 * x1 = rock
 * x2 = paper
 * x3 = scissors
 * CASE 1x = 2x DISPLAY tie
 * CASE 11 & 22 DISPLAY human wins & INCRIMENT humanScore by 1
 * CASE 12 & 23 DISPLAY human wins & INCRIMENT humanScore by 1
 * CASE 13 & 21 DISPLAY human wins & INCRIMENT humanScore by 1
 * CASE 11 & 23 DISPLAY computer wins & INCRIMENT computerScore by 1
 * CASE 12 & 21 DISPLAY computer wins & INCRIMENT computerScore by 1
 * CASE 13 & 22 DISPLAY computer wins & INCRIMENT computerScore by 1
*/ 

function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
  switch(true) {
    case computerChoice == humanChoice:
      window.confirm("It\'s a tie!");
      tieScore++;
    break;
    case computerChoice == 1 && humanChoice == 2:
    case computerChoice == 2 && humanChoice == 3:
    case computerChoice == 3 && humanChoice == 1:
      window.confirm("You win!");
      humanScore++;
      break;
    case computerChoice == 1 && humanChoice == 3:
    case computerChoice == 2 && humanChoice == 1:
    case computerChoice == 3 && humanChoice == 2:
      window.confirm("You lose!");
      computerScore++;
      break;
  }
}
/*
 *PLAYROUND 5 times,
 IF a > b ALERT a wins
 ELSE IF a < b ALERT a loses 
 ELSE AlERT tied
*/
function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  pointDeclaration = `The computer has won ${computerScore} rounds, while you have ${humanScore} and you have tied ${tieScore} tiems:`;
  winnerDeclaration = computerScore > humanScore ? "You have lost!" : computerScore < humanScore ? "You have won!" : "It\'s a tie!";
  window.confirm(pointDeclaration + " " + winnerDeclaration);
}

playGame();
