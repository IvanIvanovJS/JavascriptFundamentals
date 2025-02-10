function oddOccurrences(str){
    let arr = str.split(` `);
    let words = new Map();

    for(let word of arr){
        word = word.toLowerCase();
        if(!words.has(word)){
            words.set(word, 1);
        } else {
            words.set(word, words.get(word) + 1)
        }
    }
    let result = [];
    for(let [word, count] of words){
        if(count % 2 === 1){
            result.push(word)
            
        }
    }
    console.log(result.join(` `));
    
    
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')