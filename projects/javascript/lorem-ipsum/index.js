
/* A list of potential words to use for the generator */
const WORDS =
[
  "based",
  "chungus",
  "litty",
  "rekt",
  "flamed",
  "zoinks scoob,",
  ":3",
  "dank",
  "sippin lean,",
  "no cap",
  "ay,",
  "bet",
  "fam",
  "that hits different,",
  "salty",
  "slaaay",
  "okay simp",
  "sus",
  "big yikes,",
  "cancelled",
  "bussin",
  "dubs",
  "weird flex but okay,",
  "dripping",
  "drip",
  "fax",
  "gucci gang",
  "vibing",
  "basic",
  "spill the tea",
  "that's sus",
  "cringe"
];

/* Generation settings */
const SENTENCE_MIN_WORDS = 4,
      SENTENCE_MAX_WORDS = 9;

const PARAGRAPH_MIN_LENGTH = 5,
      PARAGRAPH_MAX_LENGTH = 7;


// Generates a random IPSUM SENTENCE
function randomSentence() {

  let length = Math.floor(Math.random() * (SENTENCE_MAX_WORDS - SENTENCE_MIN_WORDS + 1) + SENTENCE_MIN_WORDS);

  let sentence = "";

  for(let i = 0; i < length; i++) {
    sentence += WORDS[Math.floor(Math.random() * WORDS.length)] + " ";
  }

  sentence = sentence.substring(0, sentence.length - 1) + ".";

  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  console.log("Sentence generated: " + sentence);

  return sentence;
}

// Generates a random paragraph of IPSUM
function randomParagraph() {

  let length = Math.floor(Math.random() * (PARAGRAPH_MAX_LENGTH - PARAGRAPH_MIN_LENGTH + 1) + PARAGRAPH_MIN_LENGTH);

  let sentences = [];

  for(let i = 0; i < length; i++) {
    sentences.push(randomSentence());
  }

  console.log(sentences);

  return sentences.join(" ");
}

// Clears the paragraphs and adds a list of them to the element
function displayParagraphs(paragraphs) {

  let generatedText = document.getElementById("generated-text");

  generatedText.innerHTML = "";

  for(let i = 0; i < paragraphs.length; i++) {

    let text = paragraphs[i];

    let newElement = document.createElement("p");

    newElement.innerHTML = text;

    generatedText.appendChild(newElement);
  }
}

// Executes generation based on given number
function executeGenerate() {

  let paragraphCount = document.getElementById("paragraphs");

  let paragraphs = [];

  for(let i = 0; i < paragraphCount.value ? paragraphCount.value : 0; i++) {
    paragraphs.push(randomParagraph());
  }

  displayParagraphs(paragraphs);
}

// Add functionality to button
document.getElementById("generate").onclick = executeGenerate;
