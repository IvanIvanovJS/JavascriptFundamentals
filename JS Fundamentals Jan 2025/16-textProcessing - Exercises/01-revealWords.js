function revealWords(words, sentence) {
    let wordsArr = words
        .split(`, `)
        .sort((a, b) => b.length - a.length);

    for (let word of wordsArr) {
        let wordLength = word.length;
        let pattern = "*".repeat(wordLength);
        if (sentence.includes(pattern)) {
            sentence = sentence.replace(pattern, word);
        }


    }
    console.log(sentence);

}
revealWords('new, great, learning',
    'softuni is ***** place for ******** new programming languages'

)