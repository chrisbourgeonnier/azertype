
function displayScore(score, numberOfQuestions) {
  // Displays the end score
  console.log(`Your score is ${score} out of ${numberOfQuestions}`);
}

function chooseWordOrPhrase() {
  // while the user doesn't type one of the choices, the prompt will loop
  let choice = prompt("Play with 'words' or 'phrases' (enter the word)")
  while (choice !== 'words' && choice !== 'phrases') {
    choice = prompt("Play with 'words' or 'phrases'")
  };
  return choice;
}

function gameLoop(list) {
  let score = 0;
  for (let i = 0; i < list.length; i++) {
    let userInput = prompt(`Type the following: ${list[i]}`);
    if (userInput === list[i]) {
      score++;
    }
  }
  return score;
}

function launchGame() {
  let choice = chooseWordOrPhrase()
  let score = 0;
  let numberOfQuestions = 0;

  if (choice === 'words') {
    score = gameLoop(words);
    numberOfQuestions = words.length
  } else {
    score = gameLoop(phrases);
    numberOfQuestions = phrases.length
  }

  displayScore(score, numberOfQuestions)
}
