function convertToObject(jsonText){
    let person = JSON.parse(jsonText);
    for (const [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
    
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')