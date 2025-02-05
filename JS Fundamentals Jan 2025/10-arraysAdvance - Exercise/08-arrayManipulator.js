function arrayManipulator(numbers, commands) {
    function insertNumbers(index, cmdInfo, numbers) {

        let spliced = cmdInfo.slice(2,)
                             .map(Number)
                             .reverse();
        for (nums of spliced) {
            numbers.splice(index, 0, nums);
        }
        return numbers;
    }
    function shiftingElementsOfArray(numbers, counting) {
        for (let i = 1; i <= counting; i++) {
            let shifted = numbers.shift();
            numbers.push(shifted);
        }
        return numbers;
    }
    function sumPairs(numbers) {
        let sum = [];
        for (let i = 0; i < numbers.length; i += 2) {
            if (i === numbers.length - 1) {
                sum.push(+numbers[i]);
            } else {
                sum.push(+numbers[i] + +numbers[i + 1]);
            }
        }
        numbers = sum;
        return numbers;
    }
    for (let i = 0; i < commands.length; i++) {
        let cmdInfo = commands[i].split(` `);

        let cmd = cmdInfo[0].toLowerCase();
        if (cmd === `add`) {
            let index = +cmdInfo[1];
            let number = +cmdInfo[2];
            numbers.splice(index, 0, number);
        } else if (cmd === `addmany`) {
            let index = +cmdInfo[1];
            insertNumbers(index, cmdInfo, numbers);

        } else if (cmd === `contains`) {
            if (numbers.includes(+cmdInfo[1])) {
                console.log(numbers.indexOf(+cmdInfo[1]));

            } else {
                console.log(-1);

            }
        } else if (cmd === `remove`) {
            numbers.splice(cmdInfo[1], 1);
        } else if (cmd === `shift`) {
            let counting = +cmdInfo[1]
            shiftingElementsOfArray(numbers, counting)
        } else if (cmd === `sumpairs`) {

            numbers = sumPairs(numbers);

        } else if (cmd === `print`) {
             console.log(`[ ${numbers.join(`, `)} ]`);
             return
        }


    }
}
arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumpairs", "print"]
)