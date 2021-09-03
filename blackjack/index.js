// ctrl + d  select multiple at once
let gaming = true;
let hasBlackJack = false;
let message = null;
let sum = 0;
let myCards = [];
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el"); // asks for a selector; we want id of sum-el
let cardsEl = document.querySelector("#cards-el");


function startCards() {
    let firstCard = getRandomCard(), secondCard = getRandomCard();
    myCards = [firstCard, secondCard];
    console.log(myCards);
    sum = firstCard + secondCard;
}

function startGame() {
    do {
        startCards();
    } while (sum >= 21);

    gaming = true;
    hasBlackJack = false;
    message = null;

    cardsEl.textContent = "Cards: ";
    for (let card of myCards) {
        cardsEl.textContent += card + " ";
        
    }

    renderGame();
}

function renderGame() {
    sumEl.textContent = sum;

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
        gaming = false;
    } else {
        message = "You're out of the game! 😭";
        gaming = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (gaming === false) {
        messageEl.textContent = "The game has already ended!";
        return;
    }

    let randomCard = getRandomCard();
    sum += randomCard;
    cardsEl.textContent += randomCard + " ";
    renderGame();
}

function getRandomCard() {
    // Math.random() returns 0 - 0.999...
    return Math.floor( (Math.random() * 12) + 1 );
}