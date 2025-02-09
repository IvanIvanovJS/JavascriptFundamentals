function storeProvision(currentStocks, orderedStocks){
    let storage = new Map();

    for(let i = 0; i < currentStocks.length; i += 2){
        let stockName = currentStocks[i]
        let stockQuantity = +currentStocks[i + 1]
        storage.set(stockName, stockQuantity)
    }
    for(let i = 0; i < orderedStocks.length; i += 2){
        let stockName = orderedStocks[i]
        let stockQuantity = +orderedStocks[i + 1]
        if(storage.has(stockName)){
            storage.set(stockName, storage.get(stockName) + stockQuantity)
            continue;
        }
        storage.set(stockName, stockQuantity)
    }
    let result = Array.from(storage)
    for(let ele of result){
        let [name, value] = ele;
        console.log(`${name} -> ${value}`);
        
    }
    
    
    
    
    
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )