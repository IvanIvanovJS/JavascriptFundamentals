function rightPlace(startingWord, missingChar, endWord ){
    let result = startingWord.replace(`_`,missingChar);
    let finalResult = result === endWord ? `Matched` : `Not Matched`
    console.log(finalResult);
    
}
rightPlace('Str_ng', 'I', 'Strong')