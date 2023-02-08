let firstCard = 2 ;
let secondCard = 5 ;
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
    cardEl.textContent ="Cards: " + firstCard +" "+ secondCard;
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
    startGame()
}
