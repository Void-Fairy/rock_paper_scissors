# Logic Computer Choice
  Function _getComputerChoice_ generates a random number between 1 and 9 for later use
  number gets saved in variable _computerChoice_

# Logic Human Choice
  Function _getHumanChoice_ determines choice of the player
  _getHumanChoice_ prompts the player to enter text 
  prompt contains text message with instructions to the player
  _getHumanChoice_ turns choice of player into a variable named _humanChoice_

# Score Computer
  variable _humanScore_ gets defined as 0
  variable _computerScore_ gets defined as 0

# Single Round
  Function _playRound_ checks the winner by comparing parameter _humanChoice_ and _ComputerChoice_
  Parameter _humanChoice_ gets value from _getHumanChoice_ 
  Parameter _computerChoice_ gets value from _getComputerChoice_
  Parameter _humanChoice_ is treated case-insensitive
  result is displayed in the console as string: "You lose! x beats y" / "You win! x beats y"
  _playRound_ increments humanScore if the _humanChoice_ wins 
  _playRound_ increments _computerScore_ if the _computerChoice_ wins

# Entire Game 
  Function _playGame_ runs _playRound_ 5 times
  At the end of 5 round _playGame_ compares _humanScore_ & _computerScore_ and declares the winner
(the one wiht the higher score) with  a string
