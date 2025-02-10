function cardGame(arr){
    let result = {};
    let cardValues = new Map([
        [`2`, 2],
        [`3`, 3],
        [`4`, 4],
        [`5`, 5],
        [`6`, 6],
        [`7`, 7],
        [`8`, 8],
        [`9`, 9],
        [`10`, 10],
        [`J`, 11],
        [`Q`, 12],
        [`K`, 13],
        [`A`, 14],
        ['S', 4],
        ['H', 3],
        ['D', 2],
        ['C', 1]
    ]);
    for(let element of arr){
        let [name, ...cards] = element.split(`: `);
        if(!(name in result)){
            result[name] = [];
        }
        cards = cards[0].split(`, `)
        
        for(let card of cards){
            if(!(card in result[name])){
                if(!result[name].includes(card)){
                    card.split()
                    result[name].push(card)
                }
            }
            
        }

    }
    let finalSum = {};
    let entries = Object.entries(result);
    for (let[key, value] of entries) {
        finalSum[key] = 0;
        for (let card of value) {
            
             let cardNumber = card[0];
             let cardType = card[1];
             let cardPower = cardValues.get(cardNumber);
             let typeValue = cardValues.get(cardType);
             if(card.length === 3){
                cardPower = 10;
                cardType = card[2];
                typeValue = cardValues.get(cardType);
             }
             let sum = cardPower * typeValue;
             finalSum[key] += sum;
                        
             
        }
        
    }
   
    let finalResult = Object.entries(finalSum);
    for (let [name, handPower] of finalResult) {
        console.log(`${name}: ${handPower}`);
        
    }
    
    
    
    
    
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )