
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const converterForm = document.getElementById("converter-form");

const romanNumerals = [
  {
    value: 1000,
    string: "M"
  },
  {
    value: 900,
    string: "CM"
  },
  {
    value: 500,
    string: "D"
  },
  {
    value: 400,
    string: "CD"
  },
  {
    value: 100,
    string: "C"
  },
  {
    value: 90,
    string: "XC"
  },
  {
    value: 50,
    string: "L"
  },
  {
    value: 40,
    string: "XL"
  },
  {
    value: 10,
    string: "X"
  },
  {
    value: 9,
    string: "IX"
  },
  {
    value: 5,
    string: "V"
  },
  {
    value: 4,
    string: "IV"
  },
  {
    value: 1,
    string: "I"
  }
];

/* Clears and displays an output */
const displayOutput = (msg, isWarning) => {
  numberInput.value = "";
  output.textContent = msg;
  
  output.classList.remove("warning");
  output.classList.remove("hidden");

  if(isWarning) {
    output.classList.add("warning");
  }
};

/* Triggered when the conversion form is submitted */
const convert = () => {

  const intInput = parseInt(numberInput.value);

  // Ensure that the value is a decimal
  if(!numberInput.value || isNaN(intInput)) {
    return displayOutput("Please enter a valid number", true);
  }

  // Ensure that the value is positive
  if(intInput <= 0) {
    return displayOutput("Please enter a number greater than or equal to 1", true);
  }

  // Ensure that the value is not greater than max
  if(intInput > 3999) {
    return displayOutput("Please enter a number less than or equal to 3999", true);
  }

  displayOutput(arabicToRoman(intInput));
};

/* Takes an arabic number and converts it into roman numerals */
/* Using recursion */
const arabicToRoman = (number) => {
  if(!number) {
    return "";
  }

  // Loop thru roman numerals until a positive count has been detected
  for(let i = 0; i < romanNumerals.length; i++) {

    const numeral = romanNumerals[i];

    const count = Math.floor(number / numeral.value);

    if(count) {
      return (numeral.string.repeat(count)) + arabicToRoman(number % numeral.value);
    }
  }

  return "Failed";
};

/* Add functionality to convert */
converterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  convert();
});

// Hide output by default
output.classList.add("hidden");