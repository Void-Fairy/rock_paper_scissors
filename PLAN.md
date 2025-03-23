# Logic Computer Choice
  Function _getComputerChoice_ determines the choice of the computer
  _getComputerChoice_ returns "rock", "paper" or "scissors" at random

# Logic Human Choice
  Function _getHumanChoice_ determines choice of the player
  _getHumanChoice_ prompts the player to enter text 
  prompt contains text message with instructions to the player

# Score Computer
  variable _humanScore_ gets defined as 0
  variable _computerScore

# Single Round
  function playRound, with the parameters humanChoice, ComputerChoice
  parameter humanChoice takes in the human Choice - human choice is case insensitive
  computerChoice takes in the choice of the computerScore
  console.log string value of playRound as string "You lose! x beats y" or "You win! x beats y"
  Incriment humanScore or computerScore  respectively

# Entire Game 
  function playGame runs the entire Game
  make functions and parameter run inside playGame  
  playGame runs playRound 5 times

