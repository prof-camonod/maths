let flashcards = [];
let index = 0;
let showAnswer = false;

// Charger le JSON
fetch("cards.json")
  .then(response => response.json())
  .then(data => {
    flashcards = data;
    displayCard();
  });

function displayCard() {
  if (flashcards.length === 0) return;

  const card = flashcards[index];
  document.getElementById("content").textContent =
    showAnswer ? card.answer : card.question;
}

function flipCard() {
  showAnswer = !showAnswer;
  displayCard();
}

function nextCard() {
  index = (index + 1) % flashcards.length;
  showAnswer = false;
  displayCard();
}

function prevCard() {
  index = (index - 1 + flashcards.length) % flashcards.length;
  showAnswer = false;
  displayCard();
}