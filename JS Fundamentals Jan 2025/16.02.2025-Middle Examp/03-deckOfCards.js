function deckOfCards(arr) {
    let cards = arr.shift().split(`, `)
    let numberOfCards = Number(arr.shift())
    for (let element of arr) {
        let [command, ...rest] = element.split(`, `)
        if (command === `Add`) {
            let card = rest[0];
            if (cards.includes(card)) {
                console.log(`Card is already in the deck`);
            } else {
                cards.push(card);
                console.log(`Card successfully added`);

            }
        } else if (command === `Remove`) {
            let card = rest[0];
            if (cards.includes(card)) {
                cards.splice(cards.indexOf(card), 1);
                console.log(`Card successfully removed`);
            } else {
                
                console.log(`Card not found`);

            }
        } else if (command === `Remove At`) {
            let index = +rest[0];
            if (index >= 0 && index < cards.length) {
                cards.splice(index, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Index out of range`);

            }
        } else if (command === `Insert`) {
            let index = rest[0]
            let card = rest[1];
            if (index >= 0 && index < cards.length) {
                if (cards.includes(card)) {
                    console.log(`Card is already added`);
                    
                } else {
                    cards.splice(index, 0, card);
                    console.log(`Card successfully added`);
                }
                
            } else {
                console.log(`Index out of range`);

            }
        }
    }
        console.log(cards.join(`, `));
        
}
deckOfCards((["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])
    
)