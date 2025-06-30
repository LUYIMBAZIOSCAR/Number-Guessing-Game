let randomNumber = Math.floor(Math.random() * 20) + 1;

let submit = document.getElementById("btn");
let response = document.getElementById("response");
let attemptDisplay = document.getElementById("attempt");
let attempts = 0;
const previousGuessesdDisplay = document.getElementById("previousGuesses");
let previousGuesses = [];
let input = document.getElementById("userguess");

submit.addEventListener("click", () => {
  let userGuess = Number(input.value);
  if (!userGuess || userGuess < 1 || userGuess > 20) {
    response.textContent = ` Enter a valid number`;
    return;
  }
  previousGuesses.push(userGuess);
  previousGuessesdDisplay.textContent = ` Guesses : ${previousGuesses.join(
    ", "
  )}`;
  attempts++;

  if (randomNumber === userGuess) {
    response.textContent = `You guessed right, the number is ${randomNumber}`;
    endGame();
  } else if (userGuess < randomNumber) {
    response.textContent = `You guessed too low`;
    input.value = "";
  } else if (userGuess > randomNumber) {
    response.textContent = `You guessed too high`;
    input.value = "";
  }

  attemptDisplay.textContent = `Attempts : ${attempts}`;
  if (attempts == 5 && userGuess !== randomNumber) {
    endGame();
    response.textContent = "Game Over";
    return;
  }
});
function endGame() {
  attempts = 0;
  previousGuesses = [];
  input.value = "";
  previousGuessesdDisplay.textContent = "";
  attemptDisplay.textContent = "";
  randomNumber = Math.floor(Math.random() * 20) + 1;
}
