
/* Retrieve elements */
const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultContainer = document.getElementById("result");

/* Displays the palindrome check result */
const displayResult = (input, isPalindrome) => {

  resultContainer.innerHTML = `
  <p><b>${input}</b> is ${isPalindrome ? "" : "NOT "} a palindrome</p>`;

};

/* Checks for a palindrome or not */
/* Then displays result */
const check = (input, fixedInput) => {
  
  const reversedValue = fixedInput.split('').reverse().join('');

  const isPalindrome = fixedInput === reversedValue;

  displayResult(input, isPalindrome);
};

/* Add functionality */
checkButton.addEventListener("click", () => {
  
  // Ensure there is content
  if(inputText.value.length <= 0)
    return alert("Please input a value");

  // Trim whitespace and punctuation and alter case of input
  const fixedInput = inputText.value.replace(/[^\w\d]|_/g, '').toLowerCase();

  check(inputText.value, fixedInput);

  inputText.value = ''; // Reset input
});
