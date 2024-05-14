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

    let logoXPosition = 110;
    let logoYPosition = 50;
    let logoWidth = 75;
    let logoHeight = 50;
    let deckXPosition = -40;
    let deckYPosition = 60;
    let deckWidth = 40;
    let deckHeight = 40;
    let firstCardXPosition = 39;
    let firstCardWidth = 28;

    const drawBeginning = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(images.logo, logoXPosition, logoYPosition, logoWidth, logoHeight)
        ctx.drawImage(images.deck, deckXPosition, deckYPosition, deckWidth, deckHeight)


        if(logoXPosition > 1){
            logoXPosition -= 2.2;
            logoYPosition -= 1;
            logoWidth -= 0.5;
            logoHeight -= 0.35;
            deckXPosition += 1.4;
        }

        if(deckXPosition > 29 && firstCardWidth > 0){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(images.logo, logoXPosition, logoYPosition, logoWidth, logoHeight)
            ctx.drawImage(images.deck, deckXPosition, deckYPosition, deckWidth, deckHeight)
            ctx.drawImage(images.cardBack, firstCardXPosition, 60, firstCardWidth, 37)
            firstCardXPosition += 2
            firstCardWidth -= 1
        }

        

        if(logoXPosition < 1) {
            return;
        }
    
        requestAnimationFrame(drawBeginning);
    }


    drawBeginning();

}


