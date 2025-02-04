let arr = [3,6,7,3,5];
let result = [];
let currentNum = arr.shift();
result.push(currentNum);
let isRepeating = arr.includes(currentNum);
let index = arr.indexOf(currentNum);
arr.splice(index,1);
console.log(arr);


console.log(isRepeating);





