const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let colorList = ['red', 'blue', 'yellow', 'green'];

function cardNumber(){
    return Math.floor(Math.random * 15.5)
}

function cardColor(){
    return colorList[Math.floor(Math.random * 4)]
}

function compareCard(yourCard, topCard){
    if(yourCard.number === topCard.number || yourCard.color === topCard.color || yourCard.color === wildcard){
        placeCard()
    }
}


class Card{
    constructor(){
        this.number = cardNumber();
        if(this.number === 14 || this.number === 15){
            this.color = 'wildcard';
        } else {
            this.color = cardColor()
        }
        //this.id = toString(this.number) + this.color   Behövs det ens?
    }
}

function newCard(){
    return new Card
}

let cardStack = [newCard()];
let yourCards = [];
let botCards = [];


function startGame(){
    for(i=0; i<7; i++){
        yourCards.push(newCard())
        botCards.push(newCard())
    }
    console.log(yourCards)
    console.log(botCards)
    console.log(yourCards[0])
}
