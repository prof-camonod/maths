let flashcards = [];
let index = 0;
let flipped = false;

function loadDeck() {
  const selectedFile = document.getElementById("deckSelector").value;

  fetch(selectedFile)
    .then(res => res.json())
    .then(data => {
      flashcards = data;
      index = 0;
      flipped = false;
      updateCard();
    });
}

function updateCard() {
  if (flashcards.length === 0) return;

  const card = flashcards[index];
  document.getElementById("question").textContent = card.question;
  document.getElementById("answer").textContent = card.answer;

  document.getElementById("card").classList.remove("flip");
  flipped = false;
}

function flipCard() {
  const card = document.getElementById("card");
  flipped = !flipped;
  card.classList.toggle("flip");
}

function nextCard() {
  if (flashcards.length === 0) return;
  index = (index + 1) % flashcards.length;
  updateCard();
}

function prevCard() {
  if (flashcards.length === 0) return;
  index = (index - 1 + flashcards.length) % flashcards.length;
  updateCard();
}