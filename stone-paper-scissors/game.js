window.onload = () => {
  document.querySelectorAll('.playerSelection').forEach(item => {
      item.addEventListener('click', event => {
          const gameResults = startGame(item.value);
          const gameForm = document.getElementById("game-form");
          gameForm.innerHTML = 
          `
          <fieldset styles="flex-direction: column">
            <legend>Game Results</legend>
            <p class="result">Your chooise</p><br>
            <img class="playerSelection" src="./resource/${gameResults["playerSelection"]}.png">
            <p class="result">Computer chooise</p>
            <img class="playerSelection" src="./resource/${gameResults["computerSelection"]}.png">
            <p class="result">
              Result: ${gameResults["result"]}
            </p><br>
            <a href="index.html" class="result" >Play Again
          </fieldset>
          `;
      });
  });
};


function startGame(playerSelection){
  const computerSelection = generateComputerSelection();
  const result = winnerDefiner(playerSelection, computerSelection);
  const gameResults = {"playerSelection" : playerSelection, "computerSelection": computerSelection, "result": result };
  return gameResults;
}

const generateComputerSelection = () => {
  const posibleSelections = ["Stone", "Scissor", "Paper"];
  const randomSelection = Math.floor(Math.random() * posibleSelections.length);
  return posibleSelections[randomSelection];
};

const winnerDefiner = (playerSelection, computerSelection) => {
  const gameResults = {
    "Stone": stoneComparations(computerSelection), 
    "Scissor": scissorComparations(computerSelection),
    "Paper": paperComparations(computerSelection)
  };
  return gameResults[playerSelection];
};

const stoneComparations = (computerSelection) => {
  switch(computerSelection){
    case "Scissor":
      return "Win";
    case "Paper":
      return "Lose";
    case "Stone": 
      return "Tie";
  }
};

const scissorComparations = (computerSelection) => {
  switch(computerSelection){
    case "Paper":
      return "Win";
    case "Stone":
      return "Lose";
    case "Scissor":
      return "Tie";
  }
};
const paperComparations = (computerSelection) => {
  switch(computerSelection){
    case "Stone":
      return "Win";
    case "Scissor":
      return "Lose";
    case "Paper":
      return "Tie";
  }
};