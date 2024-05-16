document.addEventListener('DOMContentLoaded', function(event) {
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    document.getElementById('startButton').addEventListener('click', startGame);

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
    
    let cardStack = [];
    let yourCards = [];
    let botCards = [];
    let colorList = ['red', 'blue', 'yellow', 'green'];
    
    function cardNumber(){
        return Math.floor(Math.random() * 14)
    }
    
    function cardColor(){
        return colorList[Math.floor(Math.random() * 4)]
    }
    
    let turnNumber = 1;
    
    function whosTurn(){
        if(turnNumber % 2 === 0){
            turnNumber +=1
            return true
        } else{
            return false
        }
    }
    
    function findIndexByProperties(array, color, number) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].color === color && array[i].number === number) {
                return i;
            }
        }
    }


    
    function placeCard(card){
        let removedCard = yourCards.splice(findIndexByProperties(yourCards, card.color, card.number), 1)
        yourCards = yourCards.flat()
        console.log(removedCard, yourCards)
        cardStack.push(removedCard)
        
    }
    
    
    
    class Card{
        constructor(){
            this.width = 28;
            this.height = 37
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
    
    
    cardStack.push(newCard())
        
    for(i=0; i<7; i++){
        yourCards.push(newCard())
        botCards.push(newCard())
    }
    
    
    ctx.drawImage(images.logo, 110, 50, 75, 50);
    
    function compareCard(yourCard, topCard){
        if(!whosTurn()) {
            return;
        }
        if(yourCard.number === topCard.number || yourCard.color === topCard.color || yourCard.color === 'wildcard'){
            placeCard(yourCard)
        }
    }   

    const cardAreas = document.querySelectorAll('#cardContainer div[id^="cardArea"]');
    cardAreas.forEach(function(cardArea) {
        cardArea.addEventListener('click', function() {
            console.log("den klick")
            const index = parseInt(this.id.replace('cardArea', ''), 10);
            compareCard(yourCards[index], cardStack[cardStack.length - 1]);
        });
    });

    
    function startGame(){
    
    
        let logoXPosition = 110;
        let logoYPosition = 50;
        let logoWidth = 75;
        let logoHeight = 50;
        let deckXPosition = -40;
        let deckYPosition = 60;
        let deckWidth = 40;
        let deckHeight = 40;
        let firstBackCardXPosition = 39;
        let firstBackCardWidth = 28;
        let firstCardXPosition = 100;
        let firstCardWidth = 0;
        let yourCardsYPosition = 140;
        let botCardsYPosition = -30;
    
        const drawGame = () => {
            yourCards.flat()
            botCards.flat()
    
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
    
            if(deckXPosition > 29 && firstBackCardWidth > 1){
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(images.logo, logoXPosition, logoYPosition, logoWidth, logoHeight)
                ctx.drawImage(images.deck, deckXPosition, deckYPosition, deckWidth, deckHeight)
                ctx.drawImage(images.cardBack, firstBackCardXPosition, 60, firstBackCardWidth, 37)
                firstBackCardXPosition += 2.4
                firstBackCardWidth -= 1.2
            }
    
            if(firstBackCardWidth < 2 && firstCardXPosition > 72){
                firstCardXPosition -= 2.4
                firstCardWidth += 2.4
            }
    
            ctx.drawImage(cardStack[cardStack.length - 1].cardColor, firstCardXPosition, 60, firstCardWidth, 37)
            ctx.drawImage(cardStack[cardStack.length - 1].cardImageSymbol, firstCardXPosition, 60, firstCardWidth, 37)
    
    
            if(yourCardsYPosition > 105){
                yourCardsYPosition -= 1;
            }
    
            for(cardAmount = 0; cardAmount < yourCards.length; cardAmount++){
                ctx.drawImage(yourCards[cardAmount].cardColor, 5 + 30 * cardAmount, yourCardsYPosition, 28, 37)
                ctx.drawImage(yourCards[cardAmount].cardImageSymbol, 5 + 30 * cardAmount, yourCardsYPosition, 28, 37)
            }
    
            if(botCardsYPosition < 30){
                botCardsYPosition += 1;
            }
            for(botCardsAmount = 0; botCardsAmount < botCards.length; botCardsAmount++){
                ctx.drawImage(images.cardBack, 80 + 20 * botCardsAmount, botCardsYPosition, 18, 25)
            }
            
            requestAnimationFrame(drawGame);
        }
    
    
        drawGame();
    
    }
})




