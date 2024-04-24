let colorList = [red, blue, yellow, green]

function cardNumber(){
    return Math.floor(Math.random * 15.5)
}

function cardColor(){
    return colorList[Math.floor(Math.random * 4)]
}

class Card{
    constructor(){
        this.number = randomCardNumber();
        this.color = cardColor();
    }
}

