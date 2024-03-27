

// Store colour code element
let colorCode = document.getElementById("color-code");

// Converts an RGB component to a hex component
function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Generates a random color code using rgb
function randomHexColor() {
  let randomR = Math.floor(Math.random() * 256),
      randomG = Math.floor(Math.random() * 256),
      randomB = Math.floor(Math.random() * 256);

  return `#${componentToHex(randomR)}${componentToHex(randomG)}${componentToHex(randomB)}`;
}

// Updates the colour code text on screen
function updateColorCode() {

  let code = randomHexColor();

  colorCode.innerHTML = code.toUpperCase();

  document.body.style.background = code;

  console.log("Updated colour code: " + code);
}

// Apply update functionality to button
document.getElementById("change-color").onclick = updateColorCode;

updateColorCode();
