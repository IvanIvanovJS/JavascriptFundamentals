function bombNumbers(numbers, bombInfo) {
    function leftNeightborsBombed(numbers, indexOfBomb, bombPower) {
        let startingIndex = indexOfBomb - bombPower;
        if (startingIndex < 0) {
            startingIndex = 0;
            if (indexOfBomb !== 0) {
                bombPower = indexOfBomb;
            }
        }
        return numbers.splice(startingIndex, bombPower);
    }
    function rightNeightborsBombed(numbers, indexOfBomb, bombPower) {

        if ((indexOfBomb + bombPower) > (numbers.length - 1)) {
            bombPower = numbers.length - 1 - indexOfBomb;
            return numbers.splice(indexOfBomb, (bombPower + 1));
        }
        return numbers.splice(indexOfBomb, (bombPower + 1))
    }
    let bomb = bombInfo[0];
    let bombPower = bombInfo[1];

    let indexOfBomb = numbers.indexOf(bomb);
    while (numbers.includes(bomb)) {
        leftNeightborsBombed(numbers, indexOfBomb, bombPower);
        bomb = bombInfo[0];
        indexOfBomb = numbers.indexOf(bomb);
        rightNeightborsBombed(numbers, indexOfBomb, bombPower);
    }
    let sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0,);
    
        console.log(sum);

}
bombNumbers([2, 1, 4, 1, 1, 1, 2, 1, 1, 1],
    [2, 3]

);