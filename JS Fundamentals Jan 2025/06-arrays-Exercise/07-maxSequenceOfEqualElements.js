/*Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one.
 */
function maxSequenceOfEqualElements(arr) {

    let maxSequence = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let currentSequence = [currentElement];
        for (k = i + 1; k < arr.length; k++) {
            let nextElement = arr[k];
            if (nextElement === currentElement) {
                currentSequence.push(nextElement);
            } else {
                break;
            }
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }



    }
    console.log(maxSequence.join(` `));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])