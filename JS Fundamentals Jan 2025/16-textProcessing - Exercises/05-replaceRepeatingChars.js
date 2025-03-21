function replaceRepatingChars(str) {
    let arr = str.split(``);
    let result = [];
    let previousChar = "";
    for (let char of arr) {
        let currentChar = char;
        if (currentChar !== previousChar) {
            result.push(currentChar);
            previousChar = currentChar;
        }
    }
    console.log(result.join(``));



}
replaceRepatingChars('aaaaabbbbbcdddeeeedssaa')