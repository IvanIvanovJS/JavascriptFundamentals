function wordOccurrences(arr){
    let counter = new Map;
     for(let i = 0; i < arr.length; i++){
        let currentWord = arr[i];
        let count = arr.filter(word => word === currentWord).length;
        counter.set(currentWord, count) 
     }  
        let counterSorted = new Map([...counter]
            .sort((a,b) => b[1] - a[1]));
     for (const [word, count] of counterSorted) {
        console.log(`${word} -> ${count} times`);
        
     }
     
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])