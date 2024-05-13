const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const num0 = document.getElementById("num0")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")
const draw2 = document.getElementById("draw2")
const stopNext = document.getElementById("stopNext")
const reverse = document.getElementById("reverse")
const wildDraw = document.getElementById("wildDraw")
const wild = document.getElementById("wild")
const cardBack = document.getElementById("cardBack")
const blueBase = document.getElementById("blueBase")
const greenBase = document.getElementById("greenBase")
const redBase = document.getElementById("redBase")
const yellowBase = document.getElementById("yellowBase")
const logo = document.getElementById("logo")
const background = document.getElementById("background")

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
        //if(this     )
        //this.id = toString(this.number) + this.color   Behövs det ens?
    }
}

function newCard(){
    return new Card
}

let cardStack = [newCard()];
let yourCards = [];
let botCards = [];

ctx.drawImage(logo, 110, 50, 75, 50);
function startGame(){
    ctx.drawImage(background, 0, 0, 300, 150,)
    ctx.drawImage(logo, 5, 5, 30, 20);
    for(i=0; i<7; i++){
        yourCards.push(newCard())
        botCards.push(newCard())
    }
    console.log(yourCards)
    console.log(botCards)
    console.log(yourCards[0])
}


