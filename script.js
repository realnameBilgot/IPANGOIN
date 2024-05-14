const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const images  = {
    draw2: document.getElementById("draw2"),
    stopNext: document.getElementById("stopNext"),
    wildDraw: document.getElementById("wildDraw"),
    wild: document.getElementById("wild"),
    cardBack: document.getElementById("cardBack"),
    blueBase: document.getElementById("blueBase"),
    greenBase: document.getElementById("greenBase"),
    redBase: document.getElementById("redBase"),
    yellowBase: document.getElementById("yellowBase"),
    logo: document.getElementById("logo"),
    background: document.getElementById("background"),
    deck: document.getElementById("deck"),
    numbers: []
}

for(let number = 0; number < 10; number++){
    images.numbers.push(document.getElementById(`num${number}`));
}



// const draw2 = document.getElementById("draw2")
// const stopNext = document.getElementById("stopNext")
// const reverse = document.getElementById("reverse")
// const wildDraw = document.getElementById("wildDraw")
// const wild = document.getElementById("wild")
// const cardBack = document.getElementById("cardBack")
// const blueBase = document.getElementById("blueBase")
// const greenBase = document.getElementById("greenBase")
// const redBase = document.getElementById("redBase")
// const yellowBase = document.getElementById("yellowBase")
// const logo = document.getElementById("logo")
// const background = document.getElementById("background")

let colorList = ['red', 'blue', 'yellow', 'green'];

function cardNumber(){
    return Math.floor(Math.random() * 14)
}

function cardColor(){
    return colorList[Math.floor(Math.random() * 4)]
}

function compareCard(yourCard, topCard){
    if(yourCard.number === topCard.number || yourCard.color === topCard.color || yourCard.color === wildcard){
        placeCard()
    }
}


class Card{
    constructor(){
        this.number = cardNumber();
        if(this.number === 12 || this.number === 13){
            this.color = 'wildcard';
        } else {
            this.color = cardColor()
        }

        // for(i=0; i<10; i++){
        //     if(this.number === i){               hur ska jag göra för att få cardNumber att bli varje sifferbild???? 
        //         this.cardNumber = num + i
        //     }
        // }
        
        if(this.color === 'blue'){
            this.cardColor = images.blueBase
        } else if(this.color === 'red'){
            this.cardColor = images.redBase
        } else if(this.color === 'green'){
            this.cardColor = images.greenBase
        } else if(this.color === 'yellow'){
            this.cardColor = images.yellowBase
        } else{
            this.cardColor = images.cardBack
        }

        if(this.number < 10){
            this.cardImageSymbol = images.numbers[this.number]
        } else if( this.number === 10){
            this.cardImageSymbol = images.draw2
        } else if(this.number === 11){
            this.cardImageSymbol = images.stopNext
        } else if(this.number === 12){
            this.cardImageSymbol = images.wild
        } else if(this.number === 13){
            this.cardImageSymbol = images.wildDraw
        }

        
    }
}

function newCard(){
    return new Card
}

let cardStack = [newCard()];
let yourCards = [];
let botCards = [];

ctx.drawImage(images.logo, 110, 50, 75, 50);


function startGame(){

    for(i=0; i<7; i++){
        yourCards.push(newCard())
        botCards.push(newCard())
    }

    let logoXPos = 110;
    let logoYPos = 50;
    let logoWidth = 75;
    let logoHeight = 50;
    let deckXPos = -40;
    let deckYPos = 60;
    let deckWidth = 40;
    let deckHeight = 40;

    const drawBeginning = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(images.logo, logoXPos, logoYPos, logoWidth, logoHeight)
        ctx.drawImage(images.deck, deckXPos, deckYPos, deckWidth, deckHeight)
        ctx.drawImage(yourCards[0].cardColor, 40, 40, 40, 40)
        ctx.drawImage(yourCards[0].cardImageSymbol, 40, 40, 40, 40)

        logoXPos -= 2.2;
        logoYPos -= 1;
        logoWidth -= 0.5;
        logoHeight -= 0.35;
        deckXPos += 1.4;


        if(logoXPos < 1 || logoYPos < 1) {
            return;
        }
    
        requestAnimationFrame(drawBeginning);
    }


    drawBeginning();

}


