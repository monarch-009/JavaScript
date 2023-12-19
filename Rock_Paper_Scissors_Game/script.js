let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tie: 0,
};

updateScoreElement();

/*
if(!score){
    score = {win:0,loss:0,tie:0};
}
*/

function resetScore() {
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  localStorage.removeItem("score");
  updateScoreElement();
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "Rock") {
      result = "You loss";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else {
      result = "You loss";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.win++;
  } else if (result === "You loss") {
    score.loss++;
  } else {
    score.tie++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js_result").innerHTML = result;

  document.querySelector(
    ".js_moves"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js_score"
  ).innerHTML = `Score: Win: ${score.win} Loss: ${score.loss} Tie: ${score.tie}`;
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissor";
  }
  return computerMove;
}
