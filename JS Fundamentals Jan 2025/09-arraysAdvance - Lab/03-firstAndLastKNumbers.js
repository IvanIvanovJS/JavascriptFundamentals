function firstAndLastKNumbers(arr){
let kNumber = arr.shift();
let firstKElements = arr.slice(0,kNumber);
let lastKElements = arr.slice(arr.length - kNumber);
console.log(firstKElements.join(` `));
console.log(lastKElements.join(` `));




}
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   )