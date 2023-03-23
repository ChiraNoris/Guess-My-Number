let theNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector(".number").textContent = "";
let theScore = 20; //document.querySelector(".score").value;
let highscore = 0;

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
    if (theScore > highscore) {
      highscore = theScore;

      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
  }
});

console.log(theNumber);
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
  theScore = 20;
  theNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = " Start guessing...";
  document.querySelector(".number").textContent = theNumber;
  document.querySelector("body").style.backgroundColor = "#222";
});

//Start guessing...
