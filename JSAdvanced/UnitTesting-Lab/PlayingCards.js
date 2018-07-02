function makeCard(card , suit) {
    const _validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const _validSuits = ['S','H','D','C'];

    if(!_validCards.includes(card)
        || !_validSuits.includes(suit)){
        throw new Error("Error")
    }

    let suitPic = {
        S : '\u2660',
        H : '\u2665 ',
        D : '\u2666 ',
        C : '\u2663 '
};

    let cardObj = {
        card : card,
        suit : suitPic[suit],
        toString : function () {
            return this.card + "" + this.suit;
        }
    }

    return cardObj;
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));