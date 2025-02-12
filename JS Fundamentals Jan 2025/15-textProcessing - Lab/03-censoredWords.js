function censoredWord(sentence, wordToCensor){
    let result = sentence.replaceAll(wordToCensor, `*`.repeat(wordToCensor.length));
    console.log(result);
    
}
censoredWord('A small sentence with some words small', 'small')