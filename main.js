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

console.log(humanScore);
console.log(computerScore);
