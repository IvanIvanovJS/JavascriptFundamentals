function smallestTwoNumbers(arr){
    let newArr = arr.sort((a,b) => a - b)
    let slicedTwoNumbers = newArr.slice(0,2);
    console.log(slicedTwoNumbers.join(` `));
    
    
    
}
smallestTwoNumbers([30, 15, 50, 5])