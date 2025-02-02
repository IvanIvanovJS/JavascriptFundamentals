function oddAndEvenSum(num) {
    let numAsString = String(num);

    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let currentNum = Number(numAsString[i]);
        if (currentNum % 2 === 0) {
            sumOfEven += currentNum;
        } else {
            sumOfOdd += currentNum;
        }

    }
    console.log(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);
    
}
oddAndEvenSum(1000435)