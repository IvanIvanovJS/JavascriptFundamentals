function phoneBook(arr){
    let result = new Map()
    for(let element of arr){
        let [name, number] = element
            .split(` `);
        
        result.set(name, number)

    }
    for (let [name , number] of result) {
        console.log(`${name} -> ${number}`);
        
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )