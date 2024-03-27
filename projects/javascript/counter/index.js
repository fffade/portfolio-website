
// Default counter value
var counterValue;

// Store counter element
let counter = document.getElementById("counter");

// Sets the counter's new value and updates it
function setCounterValue(newValue) {

  counter.innerHTML = `${newValue}`;

  console.log("Counter value set from " + counterValue + " to " + newValue);

  counterValue = newValue;
}

// Add functionality to buttons
document.getElementById("decrease").onclick = () => {
  setCounterValue(counterValue - 1);
}
document.getElementById("increase").onclick = () => {
  setCounterValue(counterValue + 1);
}
document.getElementById("reset").onclick = setCounterValue.bind(null, 0);

// On startup, set default value
setCounterValue(0);
