function makeADictionary(arr){
    let result = new Map();
    for (let json of arr){
        let object = JSON.parse(json);
        let key = Object.keys(object)[0];
        let value = Object.values(object)[0]
        result.set(key,value)

    }
    let sortedResult = new Map([... result].sort((a,b) => a[0].localeCompare(b[0])))
    
    
    for (const [word, definition] of sortedResult) {
        console.log(`Term: ${word} => Definition: ${definition}`);  
    }

        
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )