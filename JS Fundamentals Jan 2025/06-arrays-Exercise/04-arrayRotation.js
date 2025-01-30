/**Write a function that receives an array and the number of rotations you have to perform. 
Note: Depending on the number of rotations, the first element goes to the end.
 */
function arrayRotation(arr, rotationNumber){
    
    for(let currentRotation = 1; currentRotation <= rotationNumber; currentRotation++){
        let shiftedNumber = arr.shift();
        arr.push(shiftedNumber);
    }
    console.log(arr.join(` `));
    
}
arrayRotation([51, 47, 32, 61, 21], 2)