
function displayScore(score, numberOfQuestions) {
  // Displays the end score
  let scoreArea = document.querySelector(".scoreArea span");
  scoreArea.innerHTML = `${score} / ${numberOfQuestions}`;
}

function launchGame() {
  let score = 0;
  let i = 0;

  let submitWord = document.getElementById("btnSubmitWord");
  let userInput = document.getElementById("typeInput");

  displayProposition(words[i])

  submitWord.addEventListener("click", () => {
    console.log(userInput.value);
    if (userInput.value === words[i]) {
      score++
    }
    i++;
    displayScore(score, i)
    userInput.value = "";
    if (words[i] === undefined) {
      displayProposition("game over");
      submitWord.disabled = true;
    } else {
      displayProposition(words[i]);
    }
  })
  displayScore(score, i)
}

function displayProposition(proposition) {
  let propositionArea = document.querySelector(".propositionArea");
  propositionArea.innerText = proposition;
}
