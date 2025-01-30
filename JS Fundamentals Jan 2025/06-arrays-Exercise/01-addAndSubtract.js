/*Write a function, which changes the value of odd and even numbers in an array of numbers. 
•	If the number is even - add to its value its index position
•	If the number is odd - subtract to its value its index position
 */
function addAndSubstract(arr) {
    let inputArrSum = 0;
    let outputarrSum = 0;
    let outputArr = [];
    for (let i = 0; i < arr.length; i++) {
        let inputArr = Number(arr[i]);
        if (inputArr % 2 === 0) {
            outputArr.push(Number(inputArr + i))
            outputarrSum += Number(outputArr[i]);
        } else {
            outputArr.push(Number(inputArr - i))
            outputarrSum += Number(outputArr[i]);
        }
        inputArrSum += inputArr;
    }
    console.log(outputArr);
    console.log(inputArrSum);
    console.log(outputarrSum);



}
addAndSubstract([-5, 11, 3, 0, 2])