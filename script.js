let firstCard = getRandomCard() ;
let secondCard = getRandomCard() ;
let cards = [firstCard, secondCard] //arry
let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl= document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard(){
    let s = Math.floor(Math.random() * 11)
    return s
}

function startGame() {
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    // render out firstCard and secondCard
    cardEl.textContent ="Cards: ";

    for(let i=0 ; i <cards.length; i++ ){
        cardEl.textContent += cards[i] +"  ";
    }
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

//
function newCard(){
    let card = getRandomCard();
    sum += card ;
    messageEl.textContent = message;
    //Push the card to the cards array
    cards.push(card)
    startGame()
}
