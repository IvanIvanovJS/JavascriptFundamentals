function passwordGenerator(arr) {
    let currentPass = arr[0] + arr[1];
    let pattern = /[a|o|e|i|u]/;
    let thirdWordUpper = arr[2].toUpperCase();
    let result = [];
    let counter = 0;
    for (let char of currentPass) {
        if (char.match(pattern)) {
            if (counter === thirdWordUpper.length) {
                counter = 0;
            }
            result.push(thirdWordUpper[counter])
            counter++;
        } else {
            result.push(char)
        }
    }
    console.log(`Your generated password is ${result.reverse().join(``)}`);



}
passwordGenerator(
    [
        'ilovepizza', 'ihatevegetables',
        'orange'
    ]
)