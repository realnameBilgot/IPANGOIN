let colorList = [red, blue, yellow, green]

function cardNumber(){
    return Math.floor(Math.random * 15.5)
}

function cardColor(){
    return colorList[Math.floor(Math.random * 4)]
}

function compareCard(yourCard, topCard){
    if(yourCard.number === topCard.number || yourCard.color === topCard.color || yourCard.color === wildcard){
        placeCard()
    }  else{
        //jadu
    }
}

function newCard(){
    let card = new Card
}

class Card{
    constructor(){
        this.number = randomCardNumber();
        if(this.number === 14 || this.number === 15){
            this.color = wildcard;
        } else {
            this.color = cardColor()
        }
        //this.id = toString(this.number) + this.color   Behövs det ens?
    }
}

