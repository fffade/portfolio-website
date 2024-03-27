
/* A list of review objects to display */
var REVIEWS =
[
  {
    img_path: "./images/John_Doe.jpg",
    name: "John Doe",
    occupation: "Regular Guy",
    text: "Five out of five service!"
  },
  {
    img_path: "./images/Will_Smith.png",
    name: "Will Smith",
    occupation: "Actor",
    text: "This product worked great on my movie props!"
  },
  {
    img_path: "./images/Gamer.jpg",
    name: "XxxShadowAgentxxX",
    occupation: "Pro Gamer",
    text: "made my hair gray ..... but its okay i guess"
  },
];

var reviewIndex = 0;

var previousButton = document.getElementById("previous"),
    nextButton = document.getElementById("next");


/* Updates the currently displayed review using an object */
function displayReview(review)
{
  let img = document.getElementById("review-image");
  img.src = review.img_path;

  let reviewName = document.getElementById("review-name");
  reviewName.innerHTML = review.name;

  let reviewOccupation = document.getElementById("review-occupation");
  reviewOccupation.innerHTML = review.occupation;

  let reviewContent = document.getElementById("review-content");
  reviewContent.innerHTML = review.text;
}

/* Increments or decrements the current review */
function updateReview(change)
{
  // Ignore if the review does not exist
  if(reviewIndex + change < 0 || reviewIndex + change >= REVIEWS.length)
    return;

  reviewIndex += change;

  // Display the new review
  displayReview(REVIEWS[reviewIndex]);

  // Update buttons enabled or not
  previousButton.disabled = reviewIndex == 0;
  nextButton.disabled = reviewIndex >= REVIEWS.length - 1;
}

// Add button functionality
previousButton.onclick = updateReview.bind(null, -1);
nextButton.onclick = updateReview.bind(null, 1);

updateReview(0);
