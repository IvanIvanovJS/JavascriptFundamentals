/*Write a function that determines if there exists an element in the array of numbers 
 such that the sum of the elements on its left is equal to the sum of the elements on its right. 
If there are NO elements to the left/right, their sum is 0. 
Print the index that satisfies the required condition or "no" if there is no such index.
 */
function equalSums(arr) {
    let isEqual = false
    for (let i = 0; i < arr.length; i++) {
        let sumToLeft = 0;
        let sumToRight = 0;
        for (let k = 0; k < i; k++) {
            sumToLeft += arr[k];
        }
        for (let k = i + 1; k < arr.length; k++) {
            sumToRight += arr[k];
        }
        if (sumToLeft === sumToRight) {
            console.log(i);
            isEqual = true;
        }
    }
    if (!isEqual) {
        console.log(`no`);

    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])