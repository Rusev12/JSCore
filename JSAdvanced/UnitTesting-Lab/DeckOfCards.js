function printDeckOfCards(arrOfCards) {

    let validCards = [];
    let invalidCards = [];

        for (let c of arrOfCards) {
            let card = c.substring(0 , c.length - 1 );
            let suit = c.substring(c.length - 1);
            try{
                validCards.push(makeCard(card , suit))
            }
            catch (ex){
                console.log(ex.message)
            }

        }


    function makeCard(card , suit) {
        const _validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const _validSuits = ['S','H','D','C'];

        if(!_validCards.includes(card)
            || !_validSuits.includes(suit)){
            throw new Error(`Invalid card: ${card + suit}`)
        }

        let suitPic = {
            S : '\u2660',
            H : '\u2665',
            D : '\u2666',
            C : '\u2663'
        };

        let cardObj = {
            card : card,
            suit : suitPic[suit],
            toString : function () {
                return this.card  + this.suit;
            }
        };

        validCards.push(cardObj);
    }

    console.log(validCards.join(' '));
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));

console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));
console.log(printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']));;