
function displayScore(score, numberOfQuestions) {
  // Displays the end score
  let scoreArea = document.querySelector(".scoreArea span");
  scoreArea.innerHTML = `${score} / ${numberOfQuestions}`;
}

function displayProposition(proposition) {
  let propositionArea = document.querySelector(".propositionArea");
  propositionArea.innerText = proposition;
}

function launchGame() {
  let score = 0;
  let i = 0;
  let list = words

  let submitWord = document.getElementById("btnSubmitWord");
  let userInput = document.getElementById("typeInput");

  displayProposition(list[i])

  submitWord.addEventListener("click", () => {
    if (userInput.value === list[i]) {
      score++
    }
    i++;
    displayScore(score, i)
    userInput.value = "";
    if (list[i] === undefined) {
      displayProposition("game over");
      submitWord.disabled = true;
    } else {
      displayProposition(list[i]);
    }
  })

  let radioOptionSource = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < radioOptionSource.length; index ++) {
    radioOptionSource[index].addEventListener("change", (event) => {
      if (event.target.value === "1") {
        list = words;
      } else {
        list = phrases;
      }
      displayProposition(list[i]);
    })

  displayScore(score, i)
}

}
