const playerSelection = "Stone";

const computerSelection = () => {
  const posibleSelections = ["Stone", "Scissor", "Paper"];
  const randomSelection = Math.floor(Math.random() * posibleSelections.length);
  return posibleSelections[randomSelection];
};

const winnerDefiner = (playerSelection, computerSelection) => {
  const gameResults = {
    "Stone": stoneComparations(computerSelection), 
    "Scissors": scissorComparations(computerSelection),
    "Paper": paperComparations(computerSelection)
  };
	console.log(playerSelection);
  console.log(computerSelection);
  return gameResults[playerSelection];
};

const stoneComparations = (computerSelection) => {
  switch(computerSelection){
    case "Scissor":
      return "Win";
    case "Paper":
      return "Lose";
  }
};

const scissorComparations = (computerSelection) => {
  switch(computerSelection){
    case "Paper":
      return "Win";
    case "Stone":
      return "Lose";
  }
};
const paperComparations = (computerSelection) => {
  switch(computerSelection){
    case "Stone":
      return "Win";
    case "Scissor":
      return "Lose";
  }
};


winnerDefiner(playerSelection, computerSelection());