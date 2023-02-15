let firstCard = 2 ;
let secondCard = 5 ;
let cards = [firstCard, secondCard] //arry
let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl= document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");


function startGame() {
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    // render out firstCard and secondCard
    cardEl.textContent ="Cards: " + cards[0] +" "+ cards[1];
       // render out ALL the cards we have
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
    } else {
        message = "You're out of the game!"
    }
     messageEl.textContent = message;
}


function newCard(){
    let card = 7;
    sum += card ;
    messageEl.textContent = message;
    //Push the card to the cards array
    cards.push(card)
    startGame()
}
