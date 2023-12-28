// List of words and phrases
const words = ["Whale", "Petunia", "Towel"];
const phrases = ["Don't Panic!", "Life, the Universe and Everything", "So long, and thanks for all the fish"];

// Elements selected

let share = document.getElementById("btnShare");
share.addEventListener("click", () => {
  console.log("share");
})

let scoreArea = document.querySelector(".scoreArea span");


let radioOptionSource = document.querySelectorAll(".optionSource input");
console.log(radioOptionSource);

for (let i = 0; i < radioOptionSource.length; i++) {
  console.log(radioOptionSource[i]);
}
