function storage(arr){
    let result = new Map();
    for (let element of arr) {
        let info = element.split(` `);
        let stock = info[0];
        let quantity = +info[1]
        if(result.get(stock)){
            result.set(stock, quantity + result.get(stock));
            continue;
        }
        result.set(stock, quantity)

    }
    for (const [stock,quantity] of result) {
        console.log(`${stock} -> ${quantity}`);
    }
    
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    )