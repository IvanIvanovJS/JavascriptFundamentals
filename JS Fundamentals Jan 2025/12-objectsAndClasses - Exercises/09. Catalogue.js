function catalogue(arr){
    arr.sort((a, b) => a.localeCompare(b))
    
        let letter = "";
        let result = []

    for(elem of arr){
        if(elem[0] !== letter){
            letter = elem[0]
            result.push(letter);
        }
        let [name, price] = elem.split(` : `);
        
        result.push(`${name}: ${price}`);
    }

    console.log(result.join(`\n`)); 
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )