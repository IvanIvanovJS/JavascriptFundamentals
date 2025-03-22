function lettersChangeNumbers(str) {

    let arr = str.split(` `);
    arr = arr.flat();
    let pattern = /^(?<letterOne>[A-Za-z])(?<number>[\d]+)(?<letterTwo>[A-Za-z])$/;
    let sum = 0;
    for (let element of arr) {
        let matches = element.match(pattern);
        let letterOne = matches.groups.letterOne;
        let number = Number(matches.groups.number);
        let letterTwo = matches.groups.letterTwo;
        let currentSum = 0;
        if (letterOne.match(/[A-Z]/)) {
            let alphabetNumOne = Number(letterOne.charCodeAt()) - 64;
            currentSum += number / alphabetNumOne;

        } else {
            let alphabetNumOne = Number(letterOne.charCodeAt()) - 96;
            currentSum += number * alphabetNumOne;
        }
        if (letterTwo.match(/[A-Z]/)) {
            let alphabetNumTwo = Number(letterTwo.charCodeAt()) - 64;
            currentSum -= alphabetNumTwo;
        } else {
            let alphabetNumTwo = Number(letterTwo.charCodeAt()) - 96;
            currentSum += alphabetNumTwo;
        }
        sum += currentSum;




    }
    console.log(sum.toFixed(2));


}
lettersChangeNumbers('P34562Z q2576f   H456z')