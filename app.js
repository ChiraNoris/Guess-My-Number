const theNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector(".number").textContent = theNumber;
let theScore = 20; //document.querySelector(".score").value;

document.querySelector(".check").addEventListener("click", function () {
  // console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  //document.querySelector(".message").textContent = "Correct Number!";
  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    //When the guess is too low
  } else if (theNumber > guess) {
    if (theScore > 1) {
      document.querySelector(".message").textContent = "Too low!";
      theScore--;
      document.querySelector(".score").textContent = theScore;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
      document.querySelector("body").style.backgroundColor = "#red";
      document.querySelector("body").style.width = "30rem";
    }
    //When the guess is too high
  } else if (theNumber < guess) {
    if (theScore > 1) {
      document.querySelector(".message").textContent = "Too high!";
      theScore--;
      document.querySelector(".score").textContent = theScore;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector("body").style.width = "30rem";
    }
    //When the number is correct
  } else {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector(".highscore").textContent = theScore;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("body").style.width = "30rem";
  }
});

console.log(theNumber);
