function sorting(arr){
    let sortedArr = arr.sort((a,b) => b-a)
    let result = [];
    
    while(sortedArr.length > 0){
        let biggestNum = sortedArr.shift();
        let smallestNum = sortedArr.pop();
        result.push(biggestNum);
        result.push(smallestNum);
    }
    console.log(result.join(` `));
    
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])