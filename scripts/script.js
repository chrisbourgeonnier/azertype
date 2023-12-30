
function displayScore(score, numberOfQuestions) {
  // Displays the end score
  let scoreArea = document.querySelector(".scoreArea span");
  scoreArea.innerHTML = `${score} / ${numberOfQuestions}`;
}

function displayProposition(proposition) {
  let propositionArea = document.querySelector(".propositionArea");
  propositionArea.innerText = proposition;
}

function displayEmail(name, email, score) {
  let mailto = `mailto:${email}?subject=Score sharing Azertype&body=Hi, this is ${name} and I got ${score} on Azertype !`
  location.href = mailto
}

function validateName(name) {
  if (name.length >= 2) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegExp.test(email)) {
    return true;
  }
  return false;
}

function launchGame() {
  let score = 0;
  let i = 0;
  let list = words
  initAddEventListenerPopup()

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

  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameInfo = document.getElementById("name");
    let name = nameInfo.value;

    let emailInfo = document.getElementById("email");
    let email = emailInfo.value;

    if (validateName(name) && validateEmail(email)) {
      let scoreEmail = `${score} / ${i}`
      displayEmail(name, email, scoreEmail);
    } else {
      console.log("error");
    };

  })

  displayScore(score, i)
}

}
