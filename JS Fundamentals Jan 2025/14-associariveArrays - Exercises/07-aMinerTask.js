function minerTaks(arr){
    let result = {};
    for(let i = 0; i < arr.length; i+=2){
        let material = arr[i];
        let quantity = +arr[i + 1];
        if(!(material in result)){
            result[material] = quantity;
        }else {
            result[material] += quantity;
        }

    }
    result = Object.entries(result);
    for (const entries of result) {
        let [material, quantity] = entries;
        console.log(`${material} -> ${quantity}`);
        
    }
    
}
minerTaks([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )