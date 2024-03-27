
/* Colour displays */
var lightContainer = document.getElementById("output-1"),
    originalContainer = document.getElementById("output-2"),
    darkContainer = document.getElementById("output-3");

var lightCode = document.getElementById("output-1-code"),
    originalCode = document.getElementById("output-2-code"),
    darkCode = document.getElementById("output-3-code");

var colorCode = document.getElementById("color");

/* Checks if the given value is a VALID hex code */
function isHexCode(code) {

  const regex = new RegExp("#([0-9]|[a-f]){6}");

  return regex.test(code);
}

/* Updates the displayed colours using a default for the original */
function displayColors(original) {

  originalContainer.style.backgroundColor = original;
  originalCode.innerHTML = original;

  // Manage tinted colours
  let lightVersion = tintCode(original, 2),
      darkVersion = tintCode(original, -2);

  lightContainer.style.backgroundColor = lightVersion;
  lightCode.innerHTML = lightVersion;

  darkContainer.style.backgroundColor = darkVersion;
  darkCode.innerHTML = darkVersion;
}

/* Tints a code using either additional levels or negative */
function tintCode(initial, levelChange) {

  const CODES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  let chars = [initial.charAt(1), initial.charAt(3), initial.charAt(5)];
  let newChars = [];

  for(let i = 0; i < chars.length; i++) {

    let index = CODES.indexOf(chars[i]);
    let newIndex = Math.max(0, Math.min(CODES.length - 1, index + levelChange));

    newChars[i] = CODES[newIndex];
  }

  let newCode = `#${newChars[0]}${initial.charAt(2)}${newChars[1]}${initial.charAt(4)}${newChars[2]}${initial.charAt(6)}`;

  console.log(`Tinting code ${initial} (${chars}) to ${newCode} (${newChars})`);

  return newCode;
}

/* Receives the code and displays the colours and tints if valid */
function onCodeSubmit() {

  // Code verification
  if(colorCode.value.length <= 0)
    return;

  if(!isHexCode(colorCode.value)) {
    colorCode.value = "";
    return;
  }

  displayColors(colorCode.value);
}

// Add functionality to input
document.getElementById("submit").onclick = onCodeSubmit;

// Default code
colorCode.value = "#a0a0a0";
onCodeSubmit();
