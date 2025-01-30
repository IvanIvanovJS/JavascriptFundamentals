function asciiValuesReversed(char1, char2, char3){
    console.log(`${char3}${char2}${char1}`);
    let char1ascii = char1.charCodeAt();
    let char2ascii = char2.charCodeAt();
    let char3ascii = char3.charCodeAt();
    console.log(`${char3ascii} ${char2ascii} ${char1ascii}`);
    
}
asciiValuesReversed('a',
'b',
'c'
)