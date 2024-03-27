
/* Retrieve DOM elements */
const numberInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

// Used to match phone numbers
const phoneRegex = /^1?[\s-]?(?:[0-9]{3}|(?:\([0-9]{3}\)))[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;

// Fired when a the check button is pressed
const checkPhoneNumber = () => {

  // Ensure field has content
  if(!numberInput.value.length) {
    alert("Please provide a phone number");
    return;
  }

  // Validate the number against the regex
  const isValid = phoneRegex.test(numberInput.value);

  // Form the new element to add to the phone history
  const element = `<p class="${isValid ? "valid" : "invalid"}">${isValid ? "Valid" : "Invalid"} US Number: ${numberInput.value}</p>`;

  results.insertAdjacentHTML("afterbegin", element);

  numberInput.value = ""; // Reset input after

};

// Removes all numbers from history
const clearHistory = () => {
  results.innerHTML = "";
};

checkButton.addEventListener("click", checkPhoneNumber);
clearButton.addEventListener("click", clearHistory);
