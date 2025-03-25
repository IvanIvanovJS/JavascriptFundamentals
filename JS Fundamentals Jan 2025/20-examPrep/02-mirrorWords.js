function mirrorWords(arr) {
    let str = arr[0];
    let pattern = /(?<symbol>@|#)[A-Za-z]{3,}(\k<symbol>)(\k<symbol>)[A-Za-z]{3,}(\k<symbol>)/g
    let match = str.match(pattern);
    let result = [];

    if (match) {
        for (let element of match) {

            let patternAz = /[A-Za-z]/g
            let tokens = element.match(patternAz).join(``);
            let firstWord = tokens.slice(0, tokens.length / 2);
            let secondWord = tokens.slice(tokens.length / 2,)
            let compareWord = secondWord.split(``).reverse().join(``);
            if (firstWord === compareWord) {
                let words = `${firstWord} <=> ${secondWord}`;
                result.push(words);
            }


        }



    }
    if (match) {
        console.log(`${match.length} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
        return;
    }
    if (result.length !== 0) {
        console.log(`The mirror words are:\n${result.join(`, `)}`);
    } else {
        console.log(`No mirror words!`);


    }



}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']
)