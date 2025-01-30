/**Write a function to find all the top integers in an array. 
 A top integer is an integer, which is bigger than all the elements to its right. */
function maxNumber(arr) {
    let topIntegers = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isIntegerTop = true;
        for (k = i + 1; k < arr.length; k++) {
            if (currentElement <= arr[k]) {
                isIntegerTop = false;
                break;
            }
        }
        if (isIntegerTop) {
            topIntegers.push(currentElement);
        }
    }
    console.log(topIntegers.join(` `));
}
maxNumber([14, 24, 3, 19, 15, 17])