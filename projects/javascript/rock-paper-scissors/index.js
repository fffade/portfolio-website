

let choices = document.getElementsByTagName("img");

var playerChoice;

/* Triggered when a choice is pressed by the user */
function onChoiceSelect(id) {

  let selected = document.getElementById(id);

  playerChoice = id;

  // Update the border of this choice
  selected.className = "selected-choice";

  selected.onclick = "";

  console.log("Selection made: " + id);

  randomComputerChoice(); // Trigger CPU turn
}

/* Forms a random CPU choice and displays the result */
function randomComputerChoice() {

  let options = ["rock", "paper", "scissors"];

  let cpuChoice = options[Math.floor(Math.random() * options.length)];

  console.log("Computer chose: " + cpuChoice);

  // Display computer choice
  setComputerChoice(cpuChoice.toUpperCase());

  // Determine if the player won
  let playerWon = (playerChoice == "rock" && cpuChoice == "scissors" || playerChoice == "paper" && cpuChoice == "rock" || playerChoice == "scissors" && cpuChoice == "paper");

  let tie = (playerChoice == cpuChoice);

  setMessage(tie ? "TIE" : (playerWon ? "You won!" : "You lost"));

  document.getElementById("reset").style.visibility = "visible";
}

/* Updates the message on the screen */
function setMessage(text) {
  document.getElementById("message").innerHTML = text;
}

/* Updates the computer choice on the screen, or hides it */
function setComputerChoice(name) {

  let computerChoiceMessage = document.getElementById("cpu-choice-message");
  let computerChoice = document.getElementById("cpu-choice");

  // If no name provided, hide
  if(name.length <= 0) {
    computerChoiceMessage.style.visibility = "hidden";
    return;
  }

  computerChoiceMessage.style.visibility = "visible";
  computerChoice.innerHTML = name;
}

/* Resets images to default settings */
// All clickable
// All borders normal
function resetChoices() {

  for(let i = 0; i < choices.length; i++)
  {
    choices[i].className = "";

    // Add click functionality
    choices[i].onclick = onChoiceSelect.bind(null, choices[i].id);
  }
}

/* Resets everything */
function resetAll() {

  setMessage("Choose one: ");
  setComputerChoice("");
  resetChoices();

  document.getElementById("reset").style.visibility = "hidden";
}

// Add functionality to reset
document.getElementById("reset").onclick = resetAll;

resetAll();
