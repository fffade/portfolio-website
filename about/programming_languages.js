
// Get all language cards
let cards = document.getElementsByClassName("floating-card");

// Tracks which card we're on
let index = 0;

// How long it takes to reveal each card
let revealTime = 1000;

let interval;


// Hide all cards on page load
function hideCards()
{
  clearInterval(interval);

  // Loops through each card, giving it an invisibility class
  for(let i = 0; i < cards.length; i++) {

    let card = cards[i];
    card.classList.add("hidden");
  }

  index = 0;
}

// Begins revealing cards
function revealCards()
{
  interval = setInterval(revealNextCard, revealTime);
}

/*
  Reveals the next card by updating its visibility, also updates index
*/
function revealNextCard()
{
  if(index >= cards.length) // Max out at the last element
    return;

  cards[index].classList.remove("hidden");

  index++;
}

hideCards(); // By default, hide on load

// Only start revealing once the user hovers over the programming_languages
document.getElementById("programming-languages").onclick = () => {
  hideCards();
  revealNextCard();
  revealCards();
};
