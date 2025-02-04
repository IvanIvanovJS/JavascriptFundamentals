function sumFirstAndLast(arr){
let firstElement = Number(arr.shift());
let lastElement = Number(arr.pop());
let result = firstElement + lastElement;
console.log(result);

}
sumFirstAndLast(['20', '30', '40'])