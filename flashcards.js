let flashcards = [];
let index = 0;
let showAnswer = false;

function loadDeck() {
  const selectedFile = document.getElementById("deckSelector").value;

  fetch(selectedFile)
    .then(response => response.json())
    .then(data => {
      flashcards = data;
      index = 0;
      showAnswer = false;
      displayCard();
    });
}

function displayCard() {
  if (flashcards.length === 0) {
    document.getElementById("content").textContent = "Aucune carte";
    return;
  }

  const card = flashcards[index];
  document.getElementById("content").textContent =
    showAnswer ? card.answer : card.question;
}

function flipCard() {
  if (flashcards.length === 0) return;
  showAnswer = !showAnswer;
  displayCard();
}

function nextCard() {
  if (flashcards.length === 0) return;
  index = (index + 1) % flashcards.length;
  showAnswer = false;
  displayCard();
}

function prevCard() {
  if (flashcards.length === 0) return;
  index = (index - 1 + flashcards.length) % flashcards.length;
  showAnswer = false;
  displayCard();
}