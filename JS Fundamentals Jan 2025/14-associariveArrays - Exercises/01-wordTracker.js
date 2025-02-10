function wordTracker(arr){
    let wordsSearched = arr
        .shift()
        .split(` `);
    let wordsCounter = {};
    
    for (let word of wordsSearched){
        wordsCounter[word] = 0;
    }
    for(let word of arr){
        if(word in wordsCounter){
            wordsCounter[word]++;
        }
        
    }
        
    
    let result = Object.entries(wordsCounter);
    result = result
            .sort((a,b) => b[1] - a[1])
    for(let [word, count] of result){
        console.log(`${word} - ${count}`);
        
    }
    
    
    
        
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )