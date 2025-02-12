function countStringOccur(sentence, word){
    let arr = sentence.split(` `);
    let counter = 0;
    for (let element of arr) {
        if(element === word){
            counter++;
        }
    }
    console.log(counter);
    

}
countStringOccur('This is a word and it also is a sentence',
'is'
)