let options = document.querySelector(".options").querySelectorAll("button");
let resetBtn = document.querySelector("#reset");

let finalScore = document.querySelector("#score");
let optionsSelected = document.querySelector("#choices");
let finalResult = document.querySelector("#result");

let choices = ["Rock", "Paper", "Scissors"];

let humanChoice;
let computerChoice;
let score = 0;

let winConditions = [
  ["Rock", "Scissors"],
  ["Paper", "Rock"],
  ["Scissors", "Paper"],
];

let result;

options.forEach((option) => {
  option.onclick = () => {
    humanChoice = option.value;

    let computerChoiceIndex = Math.floor(Math.random() * 3);

    computerChoice = choices[computerChoiceIndex];

    validate(humanChoice, computerChoice);
  };
});

function validate(humanChoice, computerChoice) {
  let won = false;
  if (humanChoice == computerChoice) {
    result = `It's a Draw!`;
    won = true;
  }
  if (!won) {
    for (let cond of winConditions) {
      if (cond[0] == humanChoice && cond[1] == computerChoice) {
        result = `You Win!`;
        score += 1;
        won = true;
        break;
      }
    }
  }

  if (!won) {
    result = "You Lose!";
    score -= 1;
  }

  finalScore.innerHTML = score;
  optionsSelected.innerHTML = `👱🏻‍♂️ ${humanChoice} vs 🤖 ${computerChoice}`;
  finalResult.innerHTML = result;
}

resetBtn.onclick = () => {
  finalScore.innerHTML = "";
  optionsSelected.innerHTML = "";
  finalResult.innerHTML = "";
  score = 0;
};