// 'FOR' CODE
const words = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

for (let i = 0; i < words.length; i++) {
  userWord = prompt(`Type the word: ${words[i]}`);
  if (userWord === words[i]) {
    score++;
  }
}
console.log(score);

//-----------------------------
// 'WHILE' CODE

// const words = ["Cachalot", "Pétunia", "Serviette"];
// let score = 0;

// let i = 0;
// while (i < words.length) {
//   userWord = prompt(`Enter the word: ${words[i]}`);
//   if (userWord === words[i]) {
//   console.log(userWord);
//   score++;
//   console.log(score);
//   i++;
//   } else {
//     i++;
//   }
// };

// -----------------------------------
// MANUAL CODE

// const words = ["Cachalot", "Pétunia", "Serviette"];
// let score = 0;

// {
//   let userWord = prompt("Enter the word: " + words[0]);
// console.log(userWord);

// if (userWord === words[0]) {
//   score +=1
//   console.log("Well done!");
// } else {
//   console.log("Sorry, there must be a typo.");
// }
// }
// {
// userWord = prompt("Enter the word: " + words[1]);
// console.log(userWord);

// if (userWord === words[1]) {
//   score +=1
//   console.log("Well done!");
// } else {
//   console.log("Sorry, there must be a typo.");
// }
// }
// {
// userWord = prompt("Enter the word: " + words[2]);
// console.log(userWord);

// if (userWord === words[2]) {
//   score +=1
//   console.log("Well done!");
// } else {
//   console.log("Sorry, there must be a typo.");
// }
// }

// -----------------------------

// 'FOR' loop
// for (let i = 0; i < 3; i++){
//   console.log(`hello ${i}`);
// }

// 'WHILE' loop
