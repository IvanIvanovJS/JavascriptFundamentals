function searchForANumber(arr1,arr2){
let slicedArr = arr1.slice(0,arr2[0]);
slicedArr.splice(0,arr2[1]);
let result = slicedArr.filter(el => el === arr2[2]);
console.log(`Number ${arr2[2]} occurs ${result.length} times.`);




}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )