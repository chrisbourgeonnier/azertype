const words = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

{
  let userWord = prompt("Enter the word: " + words[0]);
console.log(userWord);

if (userWord === words[0]) {
  score +=1
  console.log("Well done!");
} else {
  console.log("Sorry, there must be a typo.");
}
}
{
userWord = prompt("Enter the word: " + words[1]);
console.log(userWord);

if (userWord === words[1]) {
  score +=1
  console.log("Well done!");
} else {
  console.log("Sorry, there must be a typo.");
}
}
{
userWord = prompt("Enter the word: " + words[2]);
console.log(userWord);

if (userWord === words[2]) {
  score +=1
  console.log("Well done!");
} else {
  console.log("Sorry, there must be a typo.");
}
}
